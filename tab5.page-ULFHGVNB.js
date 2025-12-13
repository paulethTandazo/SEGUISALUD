import {
  DataService
} from "./chunk-PWHMQS6T.js";
import {
  AlertController,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonProgressBar,
  IonTitle,
  IonToolbar,
  IonicModule,
  NumericValueAccessorDirective,
  TextValueAccessorDirective
} from "./chunk-4X5WS6KO.js";
import "./chunk-BZNOWHSN.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-2BV7EQPJ.js";
import "./chunk-MFARY4HT.js";
import "./chunk-3KPY7YBM.js";
import "./chunk-COPQNC3H.js";
import "./chunk-3N5XHS3Z.js";
import "./chunk-PHMJJU5H.js";
import "./chunk-OM75IFBM.js";
import "./chunk-PDYP7XYP.js";
import "./chunk-35QPNJ7S.js";
import "./chunk-CZDDHKWA.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-JFB7YGPR.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-UZAGOUGD.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MGUVMOPK.js";
import "./chunk-TIUM25T7.js";
import "./chunk-ZPKSTMPW.js";
import "./chunk-ZFKWIOFV.js";
import "./chunk-MRWMO467.js";
import "./chunk-KKMPNYSZ.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-UL2P3LPA.js";

// src/app/tab5/tab5.page.ts
function Tab5Page_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ion-progress-bar", 19);
    \u0275\u0275elementStart(8, "p", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21)(11, "ion-button", 22);
    \u0275\u0275listener("click", function Tab5Page_div_20_Template_ion_button_click_11_listener() {
      const med_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tomarDosisManual(med_r2));
    });
    \u0275\u0275elementStart(12, "div", 23);
    \u0275\u0275element(13, "ion-icon", 24);
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15, "Restar 1");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const med_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(med_r2.nombre);
    \u0275\u0275advance();
    \u0275\u0275classProp("low-stock", med_r2.cantidadActual <= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", med_r2.cantidadActual, " restantes ");
    \u0275\u0275advance();
    \u0275\u0275property("value", med_r2.progreso)("color", ctx_r2.getColorBarra(med_r2.progreso));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("De ", med_r2.cantidadInicial, " unidades iniciales");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", med_r2.cantidadActual === 0);
  }
}
function Tab5Page_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "Tu botiqu\xEDn est\xE1 vac\xEDo.");
    \u0275\u0275elementEnd()();
  }
}
var _Tab5Page = class _Tab5Page {
  // 2. Inyectamos AlertController en el constructor
  constructor(dataService, alertCtrl) {
    this.dataService = dataService;
    this.alertCtrl = alertCtrl;
    this.nuevoNombre = "";
    this.nuevaCantidad = null;
    this.medicamentos = [];
  }
  ngOnInit() {
    this.dataService.medicamentos$.subscribe((datos) => {
      this.medicamentos = datos;
    });
  }
  agregarMedicamento() {
    return __async(this, null, function* () {
      if (this.nuevoNombre.length === 0 || !this.nuevaCantidad) {
        return;
      }
      const nuevo = {
        nombre: this.nuevoNombre,
        cantidadInicial: this.nuevaCantidad,
        cantidadActual: this.nuevaCantidad,
        progreso: 1
      };
      this.dataService.agregarMedicamento(nuevo);
      yield this.mostrarAlertaExito(this.nuevoNombre);
      this.nuevoNombre = "";
      this.nuevaCantidad = null;
    });
  }
  tomarDosisManual(med) {
    this.dataService.descontarDosis(med.nombre);
  }
  getColorBarra(progreso) {
    if (progreso > 0.5)
      return "success";
    if (progreso > 0.2)
      return "warning";
    return "danger";
  }
  // --- NUEVA FUNCIÓN PARA LA ALERTA ---
  mostrarAlertaExito(nombreMedicamento) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "\xA1Guardado!",
        subHeader: "Inventario Actualizado",
        message: `Se ha a\xF1adido "${nombreMedicamento}" a tu botiqu\xEDn correctamente.`,
        buttons: ["OK"],
        cssClass: "custom-alert"
        // Mantiene el estilo bonito que usamos en otros tabs
      });
      yield alert.present();
    });
  }
};
_Tab5Page.\u0275fac = function Tab5Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab5Page)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AlertController));
};
_Tab5Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab5Page, selectors: [["app-tab5"]], decls: 22, vars: 6, consts: [[1, "ion-no-border", 3, "translucent"], [1, "header-title"], [1, "bg-light", "ion-padding", 3, "fullscreen"], [1, "add-card"], ["lines", "none", 1, "custom-input"], ["slot", "start", "name", "medkit-outline", "color", "primary"], ["placeholder", "Nombre (ej. Aspirina)", 3, "ngModelChange", "ngModel"], ["slot", "start", "name", "apps-outline", "color", "primary"], ["type", "number", "placeholder", "Cantidad Total (ej. 30)", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "btn-add", 3, "click"], ["slot", "start", "name", "add"], [1, "section-label"], [1, "inventory-list"], ["class", "med-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "med-card"], [1, "med-info"], [1, "top-row"], [1, "badge"], [1, "custom-progress", 3, "value", "color"], [1, "stats"], [1, "med-action"], ["fill", "clear", 3, "click", "disabled"], [1, "btn-column"], ["name", "remove-circle-outline", 2, "font-size", "28px"], [2, "font-size", "10px"], [1, "empty-state"]], template: function Tab5Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
    \u0275\u0275text(3, "Mi Botiqu\xEDn");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 2)(5, "div", 3)(6, "h3");
    \u0275\u0275text(7, "Nuevo Medicamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-item", 4);
    \u0275\u0275element(9, "ion-icon", 5);
    \u0275\u0275elementStart(10, "ion-input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function Tab5Page_Template_ion_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuevoNombre, $event) || (ctx.nuevoNombre = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-item", 4);
    \u0275\u0275element(12, "ion-icon", 7);
    \u0275\u0275elementStart(13, "ion-input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function Tab5Page_Template_ion_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuevaCantidad, $event) || (ctx.nuevaCantidad = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-button", 9);
    \u0275\u0275listener("click", function Tab5Page_Template_ion_button_click_14_listener() {
      return ctx.agregarMedicamento();
    });
    \u0275\u0275element(15, "ion-icon", 10);
    \u0275\u0275text(16, " Guardar en Inventario ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "h3", 11);
    \u0275\u0275text(18, "Medicamentos Disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275template(20, Tab5Page_div_20_Template, 16, 8, "div", 13)(21, Tab5Page_div_21_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.nuevoNombre);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.nuevaCantidad);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.medicamentos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.medicamentos.length === 0);
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonProgressBar, IonTitle, IonToolbar, NumericValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n}\n.add-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  margin-bottom: 25px;\n}\n.add-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #444;\n  margin-bottom: 15px;\n}\n.custom-input[_ngcontent-%COMP%] {\n  --background: #f0f4f8;\n  border-radius: 12px;\n  margin-bottom: 10px;\n  --padding-start: 10px;\n}\n.btn-add[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  --border-radius: 12px;\n  --box-shadow: none;\n  font-weight: 600;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin-left: 5px;\n  margin-bottom: 15px;\n}\n.med-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 15px 15px 15px 20px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #222;\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #e3edfb;\n  color: #3880ff;\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .badge.low-stock[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #ef5350;\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%]   .custom-progress[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n}\n.med-card[_ngcontent-%COMP%]   .med-info[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: #999;\n}\n.med-card[_ngcontent-%COMP%]   .med-action[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border-left: 1px solid #eee;\n  padding-left: 5px;\n}\n.med-card[_ngcontent-%COMP%]   .med-action[_ngcontent-%COMP%]   .btn-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #3880ff;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=tab5.page.css.map */"] });
var Tab5Page = _Tab5Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab5Page, [{
    type: Component,
    args: [{ selector: "app-tab5", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: '<ion-header [translucent]="true" class="ion-no-border">\r\n  <ion-toolbar>\r\n    <ion-title class="header-title">Mi Botiqu\xEDn</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]="true" class="bg-light ion-padding">\r\n\r\n  <!-- SECCI\xD3N: AGREGAR NUEVO MEDICAMENTO -->\r\n  <div class="add-card">\r\n    <h3>Nuevo Medicamento</h3>\r\n    \r\n    <ion-item lines="none" class="custom-input">\r\n      <ion-icon slot="start" name="medkit-outline" color="primary"></ion-icon>\r\n      <ion-input [(ngModel)]="nuevoNombre" placeholder="Nombre (ej. Aspirina)"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines="none" class="custom-input">\r\n      <ion-icon slot="start" name="apps-outline" color="primary"></ion-icon>\r\n      <ion-input type="number" [(ngModel)]="nuevaCantidad" placeholder="Cantidad Total (ej. 30)"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand="block" class="btn-add" (click)="agregarMedicamento()">\r\n      <ion-icon slot="start" name="add"></ion-icon>\r\n      Guardar en Inventario\r\n    </ion-button>\r\n  </div>\r\n\r\n  <h3 class="section-label">Medicamentos Disponibles</h3>\r\n\r\n  <!-- LISTA DE INVENTARIO -->\r\n  <div class="inventory-list">\r\n    \r\n    <div class="med-card" *ngFor="let med of medicamentos">\r\n      \r\n      <div class="med-info">\r\n        <div class="top-row">\r\n          <h2>{{ med.nombre }}</h2>\r\n          <!-- Badge que avisa si queda poco -->\r\n          <span class="badge" [class.low-stock]="med.cantidadActual <= 3">\r\n            {{ med.cantidadActual }} restantes\r\n          </span>\r\n        </div>\r\n\r\n        <!-- Barra de Progreso Visual -->\r\n        <ion-progress-bar \r\n          [value]="med.progreso" \r\n          [color]="getColorBarra(med.progreso)"\r\n          class="custom-progress">\r\n        </ion-progress-bar>\r\n        \r\n        <p class="stats">De {{ med.cantidadInicial }} unidades iniciales</p>\r\n      </div>\r\n\r\n      <!-- Bot\xF3n para registrar toma MANUALMENTE desde el inventario -->\r\n      <div class="med-action">\r\n        <ion-button fill="clear" (click)="tomarDosisManual(med)" [disabled]="med.cantidadActual === 0">\r\n          <div class="btn-column">\r\n            <ion-icon name="remove-circle-outline" style="font-size: 28px;"></ion-icon>\r\n            <span style="font-size: 10px;">Restar 1</span>\r\n          </div>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Mensaje vac\xEDo -->\r\n    <div *ngIf="medicamentos.length === 0" class="empty-state">\r\n      <p>Tu botiqu\xEDn est\xE1 vac\xEDo.</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>', styles: ["/* src/app/tab5/tab5.page.scss */\nion-content {\n  --background: #f8f9fa;\n}\n.header-title {\n  font-weight: 700;\n  color: #333;\n}\n.add-card {\n  background: white;\n  padding: 20px;\n  border-radius: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  margin-bottom: 25px;\n}\n.add-card h3 {\n  margin-top: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #444;\n  margin-bottom: 15px;\n}\n.custom-input {\n  --background: #f0f4f8;\n  border-radius: 12px;\n  margin-bottom: 10px;\n  --padding-start: 10px;\n}\n.btn-add {\n  margin-top: 15px;\n  --border-radius: 12px;\n  --box-shadow: none;\n  font-weight: 600;\n}\n.section-label {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin-left: 5px;\n  margin-bottom: 15px;\n}\n.med-card {\n  background: white;\n  border-radius: 16px;\n  padding: 15px 15px 15px 20px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.med-card .med-info {\n  flex: 1;\n}\n.med-card .med-info .top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.med-card .med-info .top-row h2 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #222;\n}\n.med-card .med-info .top-row .badge {\n  font-size: 12px;\n  background: #e3edfb;\n  color: #3880ff;\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.med-card .med-info .top-row .badge.low-stock {\n  background: #ffebee;\n  color: #ef5350;\n}\n.med-card .med-info .custom-progress {\n  height: 8px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n}\n.med-card .med-info .stats {\n  margin: 0;\n  font-size: 11px;\n  color: #999;\n}\n.med-card .med-action {\n  margin-left: 10px;\n  border-left: 1px solid #eee;\n  padding-left: 5px;\n}\n.med-card .med-action .btn-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #3880ff;\n}\n.empty-state {\n  text-align: center;\n  color: #aaa;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=tab5.page.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab5Page, { className: "Tab5Page", filePath: "src/app/tab5/tab5.page.ts", lineNumber: 14 });
})();
export {
  Tab5Page
};
//# sourceMappingURL=tab5.page-ULFHGVNB.js.map
