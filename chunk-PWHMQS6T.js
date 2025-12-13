import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MGUVMOPK.js";

// src/app/services/data.ts
var _DataService = class _DataService {
  constructor() {
    this.recordatoriosSubject = new BehaviorSubject([]);
    this.recordatorios$ = this.recordatoriosSubject.asObservable();
    this.medicamentosSubject = new BehaviorSubject([
      { nombre: "Paracetamol", cantidadInicial: 20, cantidadActual: 15, progreso: 0.75 },
      { nombre: "Ibuprofeno", cantidadInicial: 10, cantidadActual: 8, progreso: 0.8 }
    ]);
    this.medicamentos$ = this.medicamentosSubject.asObservable();
    this.rachaSubject = new BehaviorSubject(0);
    this.racha$ = this.rachaSubject.asObservable();
  }
  // ============================================================
  // 2. MÉTODOS PARA RECORDATORIOS (Agenda)
  // ============================================================
  // Agrega una nueva tarjeta a la lista de la agenda
  agregarRecordatorio(nuevo) {
    const actuales = this.recordatoriosSubject.value;
    this.recordatoriosSubject.next([nuevo, ...actuales]);
  }
  // Elimina una tarjeta específica basada en su ID único
  eliminarRecordatorio(id) {
    const actuales = this.recordatoriosSubject.value;
    this.recordatoriosSubject.next(actuales.filter((item) => item.id !== id));
  }
  // ============================================================
  // 3. MÉTODOS PARA INVENTARIO (Botiquín)
  // ============================================================
  // Agrega un nuevo medicamento a la lista del Tab 5
  agregarMedicamento(nuevo) {
    const actuales = this.medicamentosSubject.value;
    this.medicamentosSubject.next([nuevo, ...actuales]);
  }
  // Lógica Inteligente: Busca el medicamento por nombre y resta 1 unidad
  descontarDosis(nombreMedicamento) {
    const listaActualizada = this.medicamentosSubject.value.map((med) => {
      if (med.nombre === nombreMedicamento && med.cantidadActual > 0) {
        med.cantidadActual--;
        med.progreso = med.cantidadActual / med.cantidadInicial;
      }
      return med;
    });
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
};
_DataService.\u0275fac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DataService,
  factory: _DataService.\u0275fac,
  providedIn: "root"
  // Esto hace que el servicio esté disponible en toda la app
});
var DataService = _DataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
      // Esto hace que el servicio esté disponible en toda la app
    }]
  }], () => [], null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-PWHMQS6T.js.map
