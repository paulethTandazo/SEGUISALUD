import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  mailOutline, callOutline, locationOutline, personOutline, 
  cardOutline, logOutOutline, downloadOutline // Nuevo icono
} from 'ionicons/icons';

// Importamos la librería PDF
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page {

  constructor(private toastCtrl: ToastController) {
    addIcons({ mailOutline, callOutline, locationOutline, personOutline, cardOutline, logOutOutline, downloadOutline });
  }

  async descargarReporte() {
    // 1. Crear el documento PDF
    const doc = new jsPDF();
    const fechaHoy = new Date().toLocaleDateString();

    // 2. Datos Simulados (La historia clínica de la semana)
    const historialSemana = [
      { dia: 'Lunes',   med: 'Tomada', glucosa: '110 mg/dL (Normal)', sintoma: 'Ninguno' },
      { dia: 'Martes',  med: 'Tomada', glucosa: '180 mg/dL (Alto)',   sintoma: 'Dolor de cabeza' },
      { dia: 'Miérc.',  med: 'Tomada', glucosa: '95 mg/dL (Normal)',  sintoma: 'Ninguno' },
      { dia: 'Jueves',  med: 'Tomada', glucosa: '60 mg/dL (Bajo)',    sintoma: 'Mareo leve' },
      { dia: 'Viernes', med: 'Tomada', glucosa: '120 mg/dL (Normal)', sintoma: 'Ninguno' },
      { dia: 'Sábado',  med: 'Tomada', glucosa: '210 mg/dL (Alto)',   sintoma: 'Dolor de cabeza fuerte' },
      { dia: 'Domingo', med: 'Tomada', glucosa: '105 mg/dL (Normal)', sintoma: 'Ninguno' },
    ];

    // 3. Diseño del Reporte (Escribimos en el PDF)
    
    // -- CABECERA --
    doc.setFillColor(56, 128, 255); // Azul Ionic
    doc.rect(0, 0, 210, 20, 'F'); // Barra superior azul
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('SEGUI-SALUD: Reporte Semanal', 10, 13);

    // -- DATOS DEL PACIENTE --
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    
    doc.text(`Paciente: Roberto Gómez`, 10, 30);
    doc.text(`ID: 123456789`, 10, 36);
    doc.text(`Condición: Diabetes Tipo 1`, 10, 42);
    doc.text(`Fecha de emisión: ${fechaHoy}`, 150, 30);

    doc.line(10, 48, 200, 48); // Línea divisoria

    // -- TABLA DE REGISTROS --
    let y = 60; // Posición vertical inicial
    
    // Encabezados de tabla
    doc.setFont('helvetica', 'bold');
    doc.text('Día', 10, y);
    doc.text('Medicación', 40, y);
    doc.text('Glucosa', 80, y);
    doc.text('Síntomas', 140, y);
    
    y += 10;
    doc.setFont('helvetica', 'normal');

    // Filas de datos
    historialSemana.forEach(item => {
      // Color rojo si es glucosa alta/baja o hay síntoma
      if (item.glucosa.includes('Alto') || item.glucosa.includes('Bajo')) {
        doc.setTextColor(235, 68, 90); // Rojo alerta
      } else {
        doc.setTextColor(0, 0, 0); // Negro normal
      }

      doc.text(item.dia, 10, y);
      doc.text(item.med, 40, y);
      doc.text(item.glucosa, 80, y);
      doc.text(item.sintoma, 140, y);
      
      y += 10;
    });

    // -- PIE DE PÁGINA --
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(10);
    doc.text('Generado automáticamente por la app SEGUI-SALUD', 10, 280);

    // 4. Guardar y Descargar
    doc.save(`Reporte_Salud_${fechaHoy}.pdf`);

    // Notificación visual
    const toast = await this.toastCtrl.create({
      message: '📄 Reporte PDF descargado correctamente',
      duration: 3000,
      color: 'success',
      position: 'bottom',
      icon: 'checkmark-circle'
    });
    toast.present();
  }
}