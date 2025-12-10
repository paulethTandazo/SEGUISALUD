import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, Platform, ToastController } from '@ionic/angular';
import { DataService, Medicamento } from '../services/data';
import { LocalNotifications } from '@capacitor/local-notifications';
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

  fechaSeleccionada: string = this.getFechaLocalISO();
  nuevoRecordatorio: string = '';
  listaRecordatorios: any[] = [];
  
  listaMedicamentos: Medicamento[] = [];
  medicamentoVinculado: string = '';

  coloresFlashcard = ['#ffcdd2', '#b3e5fc', '#c8e6c9', '#ffe0b2', '#e1bee7'];
  indiceColor: number = 1; 
  colorActual: string = this.coloresFlashcard[this.indiceColor];

  audio = new Audio('assets/alarm.mp3'); 
  intervaloWeb: any;
  miCorreo: string = 'usuario@seguisalud.com';

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private dataService: DataService,
    private platform: Platform 
  ) {
    addIcons({ checkmarkCircleOutline, trashOutline, notificationsOutline, alarmOutline, createOutline, colorPaletteOutline, timeOutline, medkitOutline });
  }

  async ngOnInit() {
    this.dataService.recordatorios$.subscribe(datos => {
      this.listaRecordatorios = datos;
    });

    this.dataService.medicamentos$.subscribe(meds => {
      this.listaMedicamentos = meds;
    });

    if (this.platform.is('hybrid')) {
      await LocalNotifications.requestPermissions();
      await LocalNotifications.createChannel({
          id: 'alarmas_salud',
          name: 'Alarmas de Medicación',
          importance: 5,
          sound: 'res://platform_default',
          visibility: 1,
          vibration: true
      });
    } else {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
      this.iniciarRelojWeb();
    }
  }

  ngOnDestroy() {
    if (this.intervaloWeb) clearInterval(this.intervaloWeb);
  }

  getFechaLocalISO() {
    const now = new Date();
    const tzOffset = now.getTimezoneOffset() * 60000; 
    return (new Date(now.getTime() - tzOffset)).toISOString().slice(0, -1);
  }

  cambiarColor() {
    this.indiceColor++;
    if (this.indiceColor >= this.coloresFlashcard.length) {
      this.indiceColor = 0;
    }
    this.colorActual = this.coloresFlashcard[this.indiceColor];
  }

  alSeleccionarMedicamento() {
    if (this.medicamentoVinculado) {
      this.nuevoRecordatorio = `Tomar dosis de ${this.medicamentoVinculado}`;
    }
  }

  cambioFecha(event: any) {
    this.fechaSeleccionada = event.detail.value;
  }

  async agregarRecordatorio() {
    if (this.nuevoRecordatorio.trim().length < 1) { return; }

    const fechaDate = new Date(this.fechaSeleccionada);
    
    const tarea = {
      id: new Date().getTime(),
      texto: this.nuevoRecordatorio,
      fecha: this.fechaSeleccionada,
      color: this.colorActual,
      medicina: this.medicamentoVinculado,
      yaSono: false
    };

    this.dataService.agregarRecordatorio(tarea);

    if (this.platform.is('hybrid')) {
      await this.programarNotificacionNativa(tarea, fechaDate);
    }

    await this.mostrarAlertaConfirmacion(tarea.texto, tarea.fecha);
    
    this.nuevoRecordatorio = '';
    this.medicamentoVinculado = '';
  }

  async completarTarea(item: any) {
    this.audio.pause();
    this.audio.currentTime = 0;
    
    this.dataService.eliminarRecordatorio(item.id);

    if (item.medicina) {
      this.dataService.descontarDosis(item.medicina);
    }

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

  async programarNotificacionNativa(item: any, fecha: Date) {
    await LocalNotifications.schedule({
      notifications: [{
        title: '💊 Hora de tu medicación',
        body: item.texto,
        id: item.id,
        schedule: { at: fecha },
        channelId: 'alarmas_salud',
        sound: 'res://platform_default',
      }]
    });
  }

  iniciarRelojWeb() {
    this.intervaloWeb = setInterval(() => {
      this.verificarAlarmas();
    }, 2000); 
  }

  verificarAlarmas() {
    const ahora = new Date();
    this.listaRecordatorios.forEach((item) => {
      const fechaRecordatorio = new Date(item.fecha);
      if (!item.yaSono && this.esMismoMinuto(ahora, fechaRecordatorio)) {
        item.yaSono = true; 
        this.activarAlarmaWeb(item);
      }
    });
  }

  esMismoMinuto(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate() &&
           d1.getHours() === d2.getHours() &&
           d1.getMinutes() === d2.getMinutes();
  }

  async activarAlarmaWeb(item: any) {
    try {
        this.audio.loop = true; 
        await this.audio.play();
    } catch (e) {
        console.log("Audio bloqueado");
    }
    
    const alert = await this.alertCtrl.create({
      header: '¡ALARMA!',
      subHeader: 'Hora de tu medicamento',
      message: item.texto,
      backdropDismiss: false,
      buttons: [{
          text: '✅ Ya me la tomé (Apagar)',
          handler: () => {
            this.completarTarea(item);
          }
      }],
      cssClass: 'alarm-alert' 
    });
    await alert.present();
  }

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