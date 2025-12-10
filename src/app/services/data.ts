import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Definimos la estructura de un Medicamento
export interface Medicamento {
  nombre: string;
  cantidadInicial: number;
  cantidadActual: number;
  progreso: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // --- RECORDATORIOS ---
  private recordatoriosSubject = new BehaviorSubject<any[]>([]);
  recordatorios$ = this.recordatoriosSubject.asObservable();

  // --- INVENTARIO (NUEVO) ---
  private medicamentosSubject = new BehaviorSubject<Medicamento[]>([
    // Datos de ejemplo para que no salga vacío al inicio
    { nombre: 'Paracetamol', cantidadInicial: 20, cantidadActual: 15, progreso: 0.75 },
    { nombre: 'Ibuprofeno', cantidadInicial: 10, cantidadActual: 8, progreso: 0.8 }
  ]);
  medicamentos$ = this.medicamentosSubject.asObservable();

  constructor() { }

  // --- LÓGICA RECORDATORIOS ---
  agregarRecordatorio(nuevo: any) {
    const actuales = this.recordatoriosSubject.value;
    this.recordatoriosSubject.next([nuevo, ...actuales]);
  }

  eliminarRecordatorio(id: number) {
    const actuales = this.recordatoriosSubject.value;
    this.recordatoriosSubject.next(actuales.filter(item => item.id !== id));
  }

  // --- LÓGICA INVENTARIO ---
  agregarMedicamento(nuevo: Medicamento) {
    const actuales = this.medicamentosSubject.value;
    this.medicamentosSubject.next([nuevo, ...actuales]);
  }

  // Esta función es la que hace la magia de descontar
  descontarDosis(nombreMedicamento: string) {
    const listaActualizada = this.medicamentosSubject.value.map(med => {
      // Si encontramos el medicamento y aún quedan pastillas
      if (med.nombre === nombreMedicamento && med.cantidadActual > 0) {
        med.cantidadActual--; // Restamos 1
        med.progreso = med.cantidadActual / med.cantidadInicial; // Actualizamos la barra
      }
      return med;
    });
    
    // Guardamos la nueva lista actualizada
    this.medicamentosSubject.next(listaActualizada);
  }
}