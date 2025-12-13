import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// --- INTERFAZ MEDICAMENTO ---
// Define la estructura obligatoria que debe tener cada medicina en el botiquín.
export interface Medicamento {
  nombre: string;           // Ej: "Paracetamol"
  cantidadInicial: number;  // Ej: 20 (Caja completa)
  cantidadActual: number;   // Ej: 15 (Lo que queda)
  progreso: number;         // Valor entre 0.0 y 1.0 para la barra visual
}

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la app
})
export class DataService {

  // ============================================================
  // 1. FUENTES DE DATOS (Estado de la Aplicación)
  // Usamos BehaviorSubject para guardar datos en memoria y notificar cambios.
  // ============================================================

  // A. RECORDATORIOS (Agenda)
  // Guarda la lista de tarjetas de colores del Tab 2.
  private recordatoriosSubject = new BehaviorSubject<any[]>([]);
  // Esta es la "señal de radio" pública a la que se suscriben los componentes.
  recordatorios$ = this.recordatoriosSubject.asObservable();

  // B. INVENTARIO (Botiquín)
  // Guarda la lista de medicamentos del Tab 5.
  // Iniciamos con datos de ejemplo para que la pantalla no se vea vacía.
  private medicamentosSubject = new BehaviorSubject<Medicamento[]>([
    { nombre: 'Paracetamol', cantidadInicial: 20, cantidadActual: 15, progreso: 0.75 },
    { nombre: 'Ibuprofeno', cantidadInicial: 10, cantidadActual: 8, progreso: 0.8 }
  ]);
  medicamentos$ = this.medicamentosSubject.asObservable();

  // C. RACHAS (Gamificación)
  // Guarda el número de dosis seguidas que ha tomado el usuario.
  private rachaSubject = new BehaviorSubject<number>(0);
  racha$ = this.rachaSubject.asObservable();

  constructor() { }

  // ============================================================
  // 2. MÉTODOS PARA RECORDATORIOS (Agenda)
  // ============================================================

  // Agrega una nueva tarjeta a la lista de la agenda
  agregarRecordatorio(nuevo: any) {
    const actuales = this.recordatoriosSubject.value;
    // Ponemos el nuevo al principio del array ([nuevo, ...viejos])
    this.recordatoriosSubject.next([nuevo, ...actuales]);
  }

  // Elimina una tarjeta específica basada en su ID único
  eliminarRecordatorio(id: number) {
    const actuales = this.recordatoriosSubject.value;
    // Filtramos la lista para quitar el elemento que coincida con el ID
    this.recordatoriosSubject.next(actuales.filter(item => item.id !== id));
  }

  // ============================================================
  // 3. MÉTODOS PARA INVENTARIO (Botiquín)
  // ============================================================

  // Agrega un nuevo medicamento a la lista del Tab 5
  agregarMedicamento(nuevo: Medicamento) {
    const actuales = this.medicamentosSubject.value;
    this.medicamentosSubject.next([nuevo, ...actuales]);
  }

  // Lógica Inteligente: Busca el medicamento por nombre y resta 1 unidad
  descontarDosis(nombreMedicamento: string) {
    // Recorremos la lista actual modificando solo el medicamento correcto
    const listaActualizada = this.medicamentosSubject.value.map(med => {
      // Si el nombre coincide Y todavía quedan pastillas
      if (med.nombre === nombreMedicamento && med.cantidadActual > 0) {
        med.cantidadActual--; // Restamos 1
        // Recalculamos el porcentaje para que la barra visual baje
        med.progreso = med.cantidadActual / med.cantidadInicial; 
      }
      return med; // Devolvemos el medicamento (ya sea modificado o igual)
    });
    
    // Emitimos la nueva lista actualizada a toda la app
    this.medicamentosSubject.next(listaActualizada);
  }

  // ============================================================
  // 4. MÉTODOS DE GAMIFICACIÓN (Rachas)
  // ============================================================

  // Aumenta el contador del fueguito 🔥 en el Dashboard
  incrementarRacha() {
    const valorActual = this.rachaSubject.value;
    this.rachaSubject.next(valorActual + 1);
  }
}