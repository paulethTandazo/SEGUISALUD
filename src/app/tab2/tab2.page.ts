import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importamos herramientas de Ionic para la UI y detección de plataforma
import { IonicModule, AlertController, Platform, ToastController } from '@ionic/angular';
// Importamos nuestro Servicio de Datos (el cerebro de la app)
import { DataService, Medicamento } from '../services/data';
// Plugin para notificaciones en celulares reales
import { LocalNotifications } from '@capacitor/local-notifications';
// Iconos necesarios para la interfaz
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, trashOutline, notificationsOutline, alarmOutline, createOutline, colorPaletteOutline, timeOutline, medkitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page implements OnInit, OnDestroy {

  // --- VARIABLES DE ESTADO ---
  
  // Fecha seleccionada en el calendario (inicializada con hora local correcta)
  fechaSeleccionada: string = this.getFechaLocalISO();
  
  // Texto del nuevo recordatorio
  nuevoRecordatorio: string = '';
  
  // Listas locales sincronizadas con el servicio
  listaRecordatorios: any[] = [];
  listaMedicamentos: Medicamento[] = [];
  
  // Medicamento seleccionado del combobox (para descontar inventario)
  medicamentoVinculado: string = '';

  // --- VARIABLES VISUALES (FLASHCARD) ---
  coloresFlashcard = ['#ffcdd2', '#b3e5fc', '#c8e6c9', '#ffe0b2', '#e1bee7']; // Paleta pastel
  indiceColor: number = 1; // Empezamos en azul claro
  colorActual: string = this.coloresFlashcard[this.indiceColor];

  // --- VARIABLES DE ALARMA (WEB) ---
  audio = new Audio('assets/alarm.mp3'); // Archivo de sonido para navegador
  intervaloWeb: any; // El "reloj" que revisa la hora en la web
  miCorreo: string = 'usuario@seguisalud.com'; // Dato simulado

  constructor(
    private alertCtrl: AlertController, // Para Pop-ups
    private toastCtrl: ToastController, // Para mensajes breves
    private dataService: DataService,   // Para guardar/leer datos
    private platform: Platform          // Para saber si es Web o Android
  ) {
    // Registramos los iconos para que se vean en el HTML
    addIcons({ checkmarkCircleOutline, trashOutline, notificationsOutline, alarmOutline, createOutline, colorPaletteOutline, timeOutline, medkitOutline });
  }

  // --- INICIALIZACIÓN ---
  async ngOnInit() {
    // 1. Suscripción a Recordatorios: Si algo cambia, actualizamos la lista local
    this.dataService.recordatorios$.subscribe(datos => {
      this.listaRecordatorios = datos;
    });

    // 2. Suscripción al Botiquín: Para llenar el combobox de medicinas
    this.dataService.medicamentos$.subscribe(meds => {
      this.listaMedicamentos = meds;
    });

    // 3. Configuración de Notificaciones según la plataforma
    if (this.platform.is('hybrid')) {
      // ESTAMOS EN CELULAR (Android/iOS)
      await LocalNotifications.requestPermissions(); // Pedir permiso al usuario
      
      // Crear canal de alta prioridad (Vital para que suene en Android moderno)
      await LocalNotifications.createChannel({
          id: 'alarmas_salud',
          name: 'Alarmas de Medicación',
          importance: 5, // Máxima prioridad (sonido + vibración)
          sound: 'res://platform_default',
          visibility: 1,
          vibration: true
      });
    } else {
      // ESTAMOS EN NAVEGADOR WEB
      if (Notification.permission !== 'granted') {
        Notification.requestPermission(); // Permiso para notificaciones de Chrome
      }
      this.iniciarRelojWeb(); // Arrancamos el chequeo manual
    }
  }

  // Limpieza al salir de la página
  ngOnDestroy() {
    if (this.intervaloWeb) clearInterval(this.intervaloWeb);
  }

  // --- UTILIDADES ---

  // Obtiene la hora exacta de tu zona horaria (evita problemas de UTC)
  getFechaLocalISO() {
    const now = new Date();
    const tzOffset = now.getTimezoneOffset() * 60000; 
    return (new Date(now.getTime() - tzOffset)).toISOString().slice(0, -1);
  }

  // Cambia el color de fondo de la tarjeta cíclicamente
  cambiarColor() {
    this.indiceColor++;
    if (this.indiceColor >= this.coloresFlashcard.length) {
      this.indiceColor = 0; // Volver al principio
    }
    this.colorActual = this.coloresFlashcard[this.indiceColor];
  }

  // Autocompleta el texto cuando eliges una medicina del menú
  alSeleccionarMedicamento() {
    if (this.medicamentoVinculado) {
      this.nuevoRecordatorio = `Tomar dosis de ${this.medicamentoVinculado}`;
    }
  }

  // Actualiza la variable cuando el usuario mueve el calendario
  cambioFecha(event: any) {
    this.fechaSeleccionada = event.detail.value;
  }

  // --- CREACIÓN DE RECORDATORIO ---
  async agregarRecordatorio() {
    // Validación simple
    if (this.nuevoRecordatorio.trim().length < 1) { return; }

    const fechaDate = new Date(this.fechaSeleccionada);
    
    // Objeto Tarea con todos los datos necesarios
    const tarea = {
      id: new Date().getTime(), // ID único basado en milisegundos
      texto: this.nuevoRecordatorio,
      fecha: this.fechaSeleccionada,
      color: this.colorActual,       // Guardamos el color elegido
      medicina: this.medicamentoVinculado, // Guardamos qué medicina es (para descontar luego)
      yaSono: false                  // Bandera para que no suene repetido
    };

    // 1. Guardar en el Servicio Global
    this.dataService.agregarRecordatorio(tarea);

    // 2. Programar Alarma Nativa (Solo si es celular)
    if (this.platform.is('hybrid')) {
      await this.programarNotificacionNativa(tarea, fechaDate);
    }

    // 3. Confirmación visual al usuario
    await this.mostrarAlertaConfirmacion(tarea.texto, tarea.fecha);
    
    // 4. Limpiar formulario
    this.nuevoRecordatorio = '';
    this.medicamentoVinculado = '';
  }

  // --- COMPLETAR / ELIMINAR TAREA ---
  // Esta función se llama al dar clic en el Check verde o en "Ya me la tomé"
  async completarTarea(item: any) {
    // 1. Detener el ruido si estaba sonando (Web)
    this.audio.pause();
    this.audio.currentTime = 0;
    
    // 2. Eliminar de la lista visual
    this.dataService.eliminarRecordatorio(item.id);

    // 3. Descontar del inventario (Integración Tab 2 <-> Tab 5)
    if (item.medicina) {
      this.dataService.descontarDosis(item.medicina);
    }

    // 4. Gamificación: Aumentar la racha (Integración Tab 2 <-> Tab 1)
    this.dataService.incrementarRacha();

    // 5. Mensaje de éxito
    let mensaje = '✅ Dosis completada.';
    if (item.medicina) {
      mensaje += ` Inventario de ${item.medicina} actualizado.`;
    }

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  // --- LÓGICA NATIVA (ANDROID) ---
  async programarNotificacionNativa(item: any, fecha: Date) {
    await LocalNotifications.schedule({
      notifications: [{
        title: '💊 Hora de tu medicación',
        body: item.texto,
        id: item.id,
        schedule: { at: fecha }, // Fecha exacta programada
        channelId: 'alarmas_salud', // Usar el canal ruidoso que creamos
        sound: 'res://platform_default',
      }]
    });
  }

  // --- LÓGICA WEB (NAVEGADOR) ---
  iniciarRelojWeb() {
    // Revisar cada 2 segundos si hay alarmas pendientes
    this.intervaloWeb = setInterval(() => {
      this.verificarAlarmas();
    }, 2000); 
  }

  verificarAlarmas() {
    const ahora = new Date();
    this.listaRecordatorios.forEach((item) => {
      const fechaRecordatorio = new Date(item.fecha);
      
      // Si coincide el minuto exacto y no ha sonado antes
      if (!item.yaSono && this.esMismoMinuto(ahora, fechaRecordatorio)) {
        console.log('¡ALARMA!', item.texto);
        item.yaSono = true; // Marcar para que no se dispare múltiples veces en el mismo minuto
        this.activarAlarmaWeb(item);
      }
    });
  }

  // Comparador de fechas preciso hasta el minuto
  esMismoMinuto(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate() &&
           d1.getHours() === d2.getHours() &&
           d1.getMinutes() === d2.getMinutes();
  }

  // Disparar la alarma visual y sonora en el navegador
  async activarAlarmaWeb(item: any) {
    try {
        this.audio.loop = true; // Repetir sonido hasta que lo apaguen
        await this.audio.play();
    } catch (e) {
        console.log("Navegador bloqueó audio automático. Toca la pantalla.");
    }
    
    // Alerta Roja que bloquea la pantalla
    const alert = await this.alertCtrl.create({
      header: '¡ALARMA!',
      subHeader: 'Hora de tu medicamento',
      message: item.texto,
      backdropDismiss: false, // Obliga a interactuar
      buttons: [{
          text: '✅ Ya me la tomé (Apagar)',
          handler: () => {
            // Al apagar, completamos la tarea
            this.completarTarea(item);
          }
      }],
      cssClass: 'alarm-alert' 
    });
    await alert.present();
  }

  // Mensaje simple al guardar
  async mostrarAlertaConfirmacion(titulo: string, fechaIso: string) {
     const fechaLegible = new Date(fechaIso).toLocaleString();
     const alert = await this.alertCtrl.create({
      header: '¡Recordatorio Guardado!',
      message: `Se ha programado: ${titulo}\n\nPara el: ${fechaLegible}\n\nRespaldo enviado a:\n${this.miCorreo}`,
      buttons: ['Entendido'],
      cssClass: 'custom-alert'
    });
    await alert.present();
  }
}