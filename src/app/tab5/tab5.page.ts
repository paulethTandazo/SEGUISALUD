import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService, Medicamento } from '../services/data'; // Importamos el servicio

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
  medicamentos: Medicamento[] = []; // Ahora usamos la interfaz

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Nos suscribimos a los datos globales
    this.dataService.medicamentos$.subscribe(datos => {
      this.medicamentos = datos;
    });
  }

  agregarMedicamento() {
    if (this.nuevoNombre.length === 0 || !this.nuevaCantidad) {
      return; 
    }

    const nuevo: Medicamento = {
      nombre: this.nuevoNombre,
      cantidadInicial: this.nuevaCantidad,
      cantidadActual: this.nuevaCantidad,
      progreso: 1.0
    };

    // Guardamos en el servicio global
    this.dataService.agregarMedicamento(nuevo);

    this.nuevoNombre = '';
    this.nuevaCantidad = null;
  }

  // Esta función es solo para probar el botón "-" manual en el inventario
  tomarDosisManual(med: Medicamento) {
    this.dataService.descontarDosis(med.nombre);
  }
  
  getColorBarra(progreso: number): string {
    if (progreso > 0.5) return 'success';
    if (progreso > 0.2) return 'warning';
    return 'danger';
  }
}