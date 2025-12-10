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
      // Datos de ejemplo para que no salga vacío al inicio
      { nombre: "Paracetamol", cantidadInicial: 20, cantidadActual: 15, progreso: 0.75 },
      { nombre: "Ibuprofeno", cantidadInicial: 10, cantidadActual: 8, progreso: 0.8 }
    ]);
    this.medicamentos$ = this.medicamentosSubject.asObservable();
  }
  // --- LÓGICA RECORDATORIOS ---
  agregarRecordatorio(nuevo) {
    const actuales = this.recordatoriosSubject.value;
    this.recordatoriosSubject.next([nuevo, ...actuales]);
  }
  eliminarRecordatorio(id) {
    const actuales = this.recordatoriosSubject.value;
    this.recordatoriosSubject.next(actuales.filter((item) => item.id !== id));
  }
  // --- LÓGICA INVENTARIO ---
  agregarMedicamento(nuevo) {
    const actuales = this.medicamentosSubject.value;
    this.medicamentosSubject.next([nuevo, ...actuales]);
  }
  // Esta función es la que hace la magia de descontar
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
};
_DataService.\u0275fac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
var DataService = _DataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-TMJ67NVR.js.map
