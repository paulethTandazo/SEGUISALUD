import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular'; // 1. Importamos AlertController
import { DataService, Medicamento } from '../services/data';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab5Page implements OnInit {

  nuevoNombre: string = '';
  nuevaCantidad: number | null = null;
  medicamentos: Medicamento[] = [];

  // 2. Inyectamos AlertController en el constructor
  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController 
  ) {}

  ngOnInit() {
    this.dataService.medicamentos$.subscribe(datos => {
      this.medicamentos = datos;
    });
  }

  async agregarMedicamento() {
    if (this.nuevoNombre.length === 0 || !this.nuevaCantidad) {
      return; 
    }

    const nuevo: Medicamento = {
      nombre: this.nuevoNombre,
      cantidadInicial: this.nuevaCantidad,
      cantidadActual: this.nuevaCantidad,
      progreso: 1.0
    };

    this.dataService.agregarMedicamento(nuevo);

    // 3. Mostrar el Pop-up de éxito
    await this.mostrarAlertaExito(this.nuevoNombre);

    this.nuevoNombre = '';
    this.nuevaCantidad = null;
  }

  tomarDosisManual(med: Medicamento) {
    this.dataService.descontarDosis(med.nombre);
  }
  
  getColorBarra(progreso: number): string {
    if (progreso > 0.5) return 'success';
    if (progreso > 0.2) return 'warning';
    return 'danger';
  }

  // --- NUEVA FUNCIÓN PARA LA ALERTA ---
  async mostrarAlertaExito(nombreMedicamento: string) {
    const alert = await this.alertCtrl.create({
      header: '¡Guardado!',
      subHeader: 'Inventario Actualizado',
      message: `Se ha añadido "${nombreMedicamento}" a tu botiquín correctamente.`,
      buttons: ['OK'],
      cssClass: 'custom-alert' // Mantiene el estilo bonito que usamos en otros tabs
    });

    await alert.present();
  }
}