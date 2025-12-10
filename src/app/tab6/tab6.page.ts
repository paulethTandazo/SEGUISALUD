import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  sadOutline, alertCircleOutline, removeCircleOutline, happyOutline, starOutline,
  waterOutline, heartOutline, documentTextOutline, saveOutline, pulseOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab6Page {

  nivelBienestar: number = 3;
  tipoRegistro: string = 'diabetes';
  
  bloquesAgua: number[] = [8, 7, 6, 5, 4, 3, 2, 1];
  nivelAguaActual: number = 0;

  glucosa: number | null = null;
  presionSistolica: number | null = null;
  presionDiastolica: number | null = null;
  notas: string = '';

  constructor(private alertController: AlertController) {
    addIcons({ 
      sadOutline, alertCircleOutline, removeCircleOutline, happyOutline, starOutline,
      waterOutline, heartOutline, documentTextOutline, saveOutline, pulseOutline
    });
  }

  setBienestar(nivel: number) {
    this.nivelBienestar = nivel;
  }

  tomarAgua(nivel: number) {
    if (this.nivelAguaActual === nivel) {
      this.nivelAguaActual = nivel - 1;
    } else {
      this.nivelAguaActual = nivel;
    }
  }

  get litrosConsumidos(): string {
    return (this.nivelAguaActual * 0.25).toFixed(2);
  }

  async guardar(tipo: string) {
    
    if (tipo === 'diabetes' && !this.glucosa) return;
    if (tipo === 'presion' && (!this.presionSistolica || !this.presionDiastolica)) return;
    if (tipo === 'general' && this.notas.trim() === '') return;

    let mensajeDetalle = '';
    if (tipo === 'diabetes') mensajeDetalle = `Glucosa: ${this.glucosa} mg/dL`;
    if (tipo === 'presion') mensajeDetalle = `Presión: ${this.presionSistolica}/${this.presionDiastolica}`;
    if (tipo === 'general') mensajeDetalle = 'Nota registrada';

    const estadosAnimo = ['Muy mal', 'Mal', 'Regular', 'Bien', 'Excelente'];
    mensajeDetalle += `\nEstado de ánimo: ${estadosAnimo[this.nivelBienestar - 1]}`;
    
    if (this.nivelAguaActual > 0) {
      mensajeDetalle += `\nHidratación acumulada: ${this.litrosConsumidos}L`;
    }

    const alert = await this.alertController.create({
      header: '¡Guardado con éxito!',
      subHeader: 'Registro almacenado',
      message: mensajeDetalle,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
    await alert.onDidDismiss();
    
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.glucosa = null;
    this.presionSistolica = null;
    this.presionDiastolica = null;
    this.notas = '';
    this.nivelBienestar = 3;
    this.nivelAguaActual= 0;
  }
}