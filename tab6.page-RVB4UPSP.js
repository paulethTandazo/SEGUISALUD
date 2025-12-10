import {
  AlertController,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonicModule,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
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
  addIcons,
  alertCircleOutline,
  documentTextOutline,
  happyOutline,
  heartOutline,
  pulseOutline,
  removeCircleOutline,
  sadOutline,
  saveOutline,
  starOutline,
  waterOutline
} from "./chunk-QMCNGXYK.js";
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

// src/app/tab6/tab6.page.ts
function Tab6Page_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "\xA1Me siento bien!");
    \u0275\u0275elementEnd();
  }
}
function Tab6Page_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "No me siento muy bien");
    \u0275\u0275elementEnd();
  }
}
function Tab6Page_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function Tab6Page_div_33_Template_div_click_0_listener() {
      const bloque_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tomarAgua(bloque_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloque_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filled", ctx_r2.nivelAguaActual >= bloque_r2);
  }
}
function Tab6Page_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275element(2, "ion-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Registro de Glucosa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "Ingresa tu nivel actual en mg/dL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-item", 34)(8, "ion-input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function Tab6Page_div_49_Template_ion_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.glucosa, $event) || (ctx_r2.glucosa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10, "mg/dL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-button", 37);
    \u0275\u0275listener("click", function Tab6Page_div_49_Template_ion_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar("diabetes"));
    });
    \u0275\u0275element(12, "ion-icon", 38);
    \u0275\u0275text(13, " Guardar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.glucosa);
  }
}
function Tab6Page_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 39);
    \u0275\u0275element(2, "ion-icon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Presi\xF3n Arterial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "Sist\xF3lica (Alta) / Diast\xF3lica (Baja)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41)(8, "ion-item", 42)(9, "ion-input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function Tab6Page_div_50_Template_ion_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.presionSistolica, $event) || (ctx_r2.presionSistolica = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 44);
    \u0275\u0275text(11, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-item", 42)(13, "ion-input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function Tab6Page_div_50_Template_ion_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.presionDiastolica, $event) || (ctx_r2.presionDiastolica = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "ion-button", 46);
    \u0275\u0275listener("click", function Tab6Page_div_50_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar("presion"));
    });
    \u0275\u0275element(15, "ion-icon", 38);
    \u0275\u0275text(16, " Guardar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.presionSistolica);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.presionDiastolica);
  }
}
function Tab6Page_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 47);
    \u0275\u0275element(2, "ion-icon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Notas Generales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "S\xEDntomas, comidas o actividad f\xEDsica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-item", 49)(8, "ion-textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function Tab6Page_div_51_Template_ion_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notas, $event) || (ctx_r2.notas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-button", 51);
    \u0275\u0275listener("click", function Tab6Page_div_51_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar("general"));
    });
    \u0275\u0275element(10, "ion-icon", 38);
    \u0275\u0275text(11, " Guardar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notas);
  }
}
var _Tab6Page = class _Tab6Page {
  constructor(alertController) {
    this.alertController = alertController;
    this.nivelBienestar = 3;
    this.tipoRegistro = "diabetes";
    this.bloquesAgua = [8, 7, 6, 5, 4, 3, 2, 1];
    this.nivelAguaActual = 0;
    this.glucosa = null;
    this.presionSistolica = null;
    this.presionDiastolica = null;
    this.notas = "";
    addIcons({
      sadOutline,
      alertCircleOutline,
      removeCircleOutline,
      happyOutline,
      starOutline,
      waterOutline,
      heartOutline,
      documentTextOutline,
      saveOutline,
      pulseOutline
    });
  }
  setBienestar(nivel) {
    this.nivelBienestar = nivel;
  }
  tomarAgua(nivel) {
    if (this.nivelAguaActual === nivel) {
      this.nivelAguaActual = nivel - 1;
    } else {
      this.nivelAguaActual = nivel;
    }
  }
  get litrosConsumidos() {
    return (this.nivelAguaActual * 0.25).toFixed(2);
  }
  guardar(tipo) {
    return __async(this, null, function* () {
      if (tipo === "diabetes" && !this.glucosa)
        return;
      if (tipo === "presion" && (!this.presionSistolica || !this.presionDiastolica))
        return;
      if (tipo === "general" && this.notas.trim() === "")
        return;
      let mensajeDetalle = "";
      if (tipo === "diabetes")
        mensajeDetalle = `Glucosa: ${this.glucosa} mg/dL`;
      if (tipo === "presion")
        mensajeDetalle = `Presi\xF3n: ${this.presionSistolica}/${this.presionDiastolica}`;
      if (tipo === "general")
        mensajeDetalle = "Nota registrada";
      const estadosAnimo = ["Muy mal", "Mal", "Regular", "Bien", "Excelente"];
      mensajeDetalle += `
Estado de \xE1nimo: ${estadosAnimo[this.nivelBienestar - 1]}`;
      if (this.nivelAguaActual > 0) {
        mensajeDetalle += `
Hidrataci\xF3n acumulada: ${this.litrosConsumidos}L`;
      }
      const alert = yield this.alertController.create({
        header: "\xA1Guardado con \xE9xito!",
        subHeader: "Registro almacenado",
        message: mensajeDetalle,
        buttons: ["OK"],
        cssClass: "custom-alert"
      });
      yield alert.present();
      yield alert.onDidDismiss();
      this.limpiarFormulario();
    });
  }
  limpiarFormulario() {
    this.glucosa = null;
    this.presionSistolica = null;
    this.presionDiastolica = null;
    this.notas = "";
    this.nivelBienestar = 3;
    this.nivelAguaActual = 0;
  }
};
_Tab6Page.\u0275fac = function Tab6Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab6Page)(\u0275\u0275directiveInject(AlertController));
};
_Tab6Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab6Page, selectors: [["app-tab6"]], decls: 52, vars: 20, consts: [[1, "ion-no-border", 3, "translucent"], [1, "header-title"], [1, "bg-light", "ion-padding", 3, "fullscreen"], [1, "wellness-card", "ion-text-center"], [1, "mood-selector"], ["fill", "clear", 3, "click"], ["name", "sad-outline", "color", "danger"], ["name", "alert-circle-outline", "color", "warning"], ["name", "remove-circle-outline", "color", "medium"], ["name", "happy-outline", "color", "success"], ["name", "star-outline", "color", "primary"], ["class", "mood-label", 4, "ngIf"], [1, "water-card"], [1, "water-header"], [1, "icon-circle"], ["name", "water-outline"], [1, "text-info"], [1, "bottle-container"], [1, "bottle-neck"], [1, "bottle-body"], ["class", "water-block", 3, "filled", "click", 4, "ngFor", "ngForOf"], [1, "water-hint"], [1, "section-title"], ["mode", "ios", 1, "custom-segment", 3, "ngModelChange", "ngModel"], ["value", "diabetes"], ["value", "presion"], ["value", "general"], [1, "input-card"], ["class", "animate-fade", 4, "ngIf"], [1, "mood-label"], [1, "water-block", 3, "click"], [1, "animate-fade"], [1, "icon-header", "blue"], [1, "desc"], ["lines", "none", 1, "custom-input"], ["type", "number", "placeholder", "Ej. 110", 3, "ngModelChange", "ngModel"], ["slot", "end", 1, "unit"], ["expand", "block", 1, "btn-save", "blue", 3, "click"], ["slot", "start", "name", "save-outline"], [1, "icon-header", "red"], ["name", "pulse-outline"], [1, "pressure-row"], ["lines", "none", 1, "custom-input", "half"], ["type", "number", "placeholder", "120", 3, "ngModelChange", "ngModel"], [1, "slash"], ["type", "number", "placeholder", "80", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "btn-save", "red", 3, "click"], [1, "icon-header", "orange"], ["name", "document-text-outline"], ["lines", "none", 1, "custom-input", "area"], ["rows", "4", "placeholder", "Escribe aqu\xED c\xF3mo te sientes...", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "btn-save", "orange", 3, "click"]], template: function Tab6Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
    \u0275\u0275text(3, "Mi Salud Hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 2)(5, "div", 3)(6, "h3");
    \u0275\u0275text(7, "\xBFC\xF3mo te sientes ahora?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4)(9, "ion-button", 5);
    \u0275\u0275listener("click", function Tab6Page_Template_ion_button_click_9_listener() {
      return ctx.setBienestar(1);
    });
    \u0275\u0275element(10, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-button", 5);
    \u0275\u0275listener("click", function Tab6Page_Template_ion_button_click_11_listener() {
      return ctx.setBienestar(2);
    });
    \u0275\u0275element(12, "ion-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-button", 5);
    \u0275\u0275listener("click", function Tab6Page_Template_ion_button_click_13_listener() {
      return ctx.setBienestar(3);
    });
    \u0275\u0275element(14, "ion-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-button", 5);
    \u0275\u0275listener("click", function Tab6Page_Template_ion_button_click_15_listener() {
      return ctx.setBienestar(4);
    });
    \u0275\u0275element(16, "ion-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-button", 5);
    \u0275\u0275listener("click", function Tab6Page_Template_ion_button_click_17_listener() {
      return ctx.setBienestar(5);
    });
    \u0275\u0275element(18, "ion-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, Tab6Page_p_19_Template, 2, 0, "p", 11)(20, Tab6Page_p_20_Template, 2, 0, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14);
    \u0275\u0275element(24, "ion-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 16)(26, "h4");
    \u0275\u0275text(27, "Hidrataci\xF3n Diaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17);
    \u0275\u0275element(31, "div", 18);
    \u0275\u0275elementStart(32, "div", 19);
    \u0275\u0275template(33, Tab6Page_div_33_Template, 1, 2, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p", 21);
    \u0275\u0275text(35, "Toca para llenar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "h3", 22);
    \u0275\u0275text(37, "Registro Cl\xEDnico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-segment", 23);
    \u0275\u0275twoWayListener("ngModelChange", function Tab6Page_Template_ion_segment_ngModelChange_38_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipoRegistro, $event) || (ctx.tipoRegistro = $event);
      return $event;
    });
    \u0275\u0275elementStart(39, "ion-segment-button", 24)(40, "ion-label");
    \u0275\u0275text(41, "Diabetes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "ion-segment-button", 25)(43, "ion-label");
    \u0275\u0275text(44, "Presi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "ion-segment-button", 26)(46, "ion-label");
    \u0275\u0275text(47, "General");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 27);
    \u0275\u0275template(49, Tab6Page_div_49_Template, 14, 1, "div", 28)(50, Tab6Page_div_50_Template, 17, 2, "div", 28)(51, Tab6Page_div_51_Template, 12, 1, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx.nivelBienestar === 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx.nivelBienestar === 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx.nivelBienestar === 3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx.nivelBienestar === 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx.nivelBienestar === 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.nivelBienestar >= 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.nivelBienestar <= 2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx.litrosConsumidos, "L / 2.0L Meta");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.bloquesAgua);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.tipoRegistro);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.tipoRegistro === "diabetes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tipoRegistro === "presion");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tipoRegistro === "general");
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonSegment, IonSegmentButton, IonTextarea, IonTitle, IonToolbar, NumericValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n}\n.water-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.water-card[_ngcontent-%COMP%]   .water-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.water-card[_ngcontent-%COMP%]   .water-header[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #e3f2fd;\n  color: #2196f3;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.water-card[_ngcontent-%COMP%]   .water-header[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #333;\n}\n.water-card[_ngcontent-%COMP%]   .water-header[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0 0;\n  font-size: 13px;\n  color: #666;\n}\n.water-card[_ngcontent-%COMP%]   .bottle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n.water-card[_ngcontent-%COMP%]   .bottle-neck[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 15px;\n  background: #e0e0e0;\n  border: 2px solid #ccc;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n}\n.water-card[_ngcontent-%COMP%]   .bottle-body[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 160px;\n  border: 3px solid #ccc;\n  border-radius: 0 0 20px 20px;\n  background: #fff;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);\n}\n.water-card[_ngcontent-%COMP%]   .water-block[_ngcontent-%COMP%] {\n  flex: 1;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  transition: background 0.3s ease;\n  background: transparent;\n}\n.water-card[_ngcontent-%COMP%]   .water-block.filled[_ngcontent-%COMP%] {\n  background: #42a5f5;\n  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.1);\n}\n.water-card[_ngcontent-%COMP%]   .water-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.water-card[_ngcontent-%COMP%]   .water-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n  margin-top: 10px;\n}\n.wellness-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.wellness-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #555;\n}\n.mood-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.mood-selector[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 50px;\n  width: 50px;\n}\n.mood-selector[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 35px;\n  opacity: 0.3;\n  transition: 0.3s;\n}\n.mood-selector[_ngcontent-%COMP%]   ion-button.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.2);\n}\n.mood-label[_ngcontent-%COMP%] {\n  color: #3880ff;\n  font-weight: 600;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.custom-segment[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n  margin: 10px 0 10px 5px;\n}\n.input-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n.input-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 10px 0 5px 0;\n  font-weight: 700;\n  color: #333;\n}\n.input-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 13px;\n  color: #888;\n}\n.icon-header[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.icon-header.blue[_ngcontent-%COMP%] {\n  background: #e3edfb;\n  color: #3880ff;\n}\n.icon-header.red[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #eb445a;\n}\n.icon-header.orange[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.custom-input[_ngcontent-%COMP%] {\n  --background: #f0f4f8;\n  border-radius: 12px;\n  --padding-start: 15px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.custom-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.custom-input[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin-right: 15px;\n}\n.custom-input.area[_ngcontent-%COMP%] {\n  --border-radius: 15px;\n}\n.pressure-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.pressure-row[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.pressure-row[_ngcontent-%COMP%]   .slash[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ccc;\n  font-weight: 300;\n}\n.btn-save[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  font-weight: 600;\n  height: 50px;\n}\n.btn-save.blue[_ngcontent-%COMP%] {\n  --background: #3880ff;\n  --box-shadow: 0 4px 10px rgba(56, 128, 255, 0.3);\n}\n.btn-save.red[_ngcontent-%COMP%] {\n  --background: #eb445a;\n  --box-shadow: 0 4px 10px rgba(235, 68, 90, 0.3);\n}\n.btn-save.orange[_ngcontent-%COMP%] {\n  --background: #ff9800;\n  --box-shadow: 0 4px 10px rgba(255, 152, 0, 0.3);\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-in;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=tab6.page.css.map */"] });
var Tab6Page = _Tab6Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab6Page, [{
    type: Component,
    args: [{ selector: "app-tab6", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: `<ion-header [translucent]="true" class="ion-no-border">\r
  <ion-toolbar>\r
    <ion-title class="header-title">Mi Salud Hoy</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content [fullscreen]="true" class="bg-light ion-padding">\r
\r
  <div class="wellness-card ion-text-center">\r
    <h3>\xBFC\xF3mo te sientes ahora?</h3>\r
    <div class="mood-selector">\r
      <ion-button fill="clear" (click)="setBienestar(1)" [class.selected]="nivelBienestar === 1">\r
        <ion-icon name="sad-outline" color="danger"></ion-icon>\r
      </ion-button>\r
      <ion-button fill="clear" (click)="setBienestar(2)" [class.selected]="nivelBienestar === 2">\r
        <ion-icon name="alert-circle-outline" color="warning"></ion-icon>\r
      </ion-button>\r
      <ion-button fill="clear" (click)="setBienestar(3)" [class.selected]="nivelBienestar === 3">\r
        <ion-icon name="remove-circle-outline" color="medium"></ion-icon>\r
      </ion-button>\r
      <ion-button fill="clear" (click)="setBienestar(4)" [class.selected]="nivelBienestar === 4">\r
        <ion-icon name="happy-outline" color="success"></ion-icon>\r
      </ion-button>\r
      <ion-button fill="clear" (click)="setBienestar(5)" [class.selected]="nivelBienestar === 5">\r
        <ion-icon name="star-outline" color="primary"></ion-icon>\r
      </ion-button>\r
    </div>\r
    <p class="mood-label" *ngIf="nivelBienestar >= 4">\xA1Me siento bien!</p>\r
    <p class="mood-label" *ngIf="nivelBienestar <= 2">No me siento muy bien</p>\r
  </div>\r
\r
  <div class="water-card">\r
    <div class="water-header">\r
      <div class="icon-circle">\r
        <ion-icon name="water-outline"></ion-icon>\r
      </div>\r
      <div class="text-info">\r
        <h4>Hidrataci\xF3n Diaria</h4>\r
        <p>{{ litrosConsumidos }}L / 2.0L Meta</p>\r
      </div>\r
    </div>\r
\r
    <div class="bottle-container">\r
      <div class="bottle-neck"></div>\r
      <div class="bottle-body">\r
        <div \r
          *ngFor="let bloque of bloquesAgua" \r
          class="water-block"\r
          [class.filled]="nivelAguaActual >= bloque"\r
          (click)="tomarAgua(bloque)">\r
        </div>\r
      </div>\r
    </div>\r
    <p class="water-hint">Toca para llenar</p>\r
  </div>\r
\r
  <h3 class="section-title">Registro Cl\xEDnico</h3>\r
  \r
  <ion-segment [(ngModel)]="tipoRegistro" mode="ios" class="custom-segment">\r
    <ion-segment-button value="diabetes">\r
      <ion-label>Diabetes</ion-label>\r
    </ion-segment-button>\r
    <ion-segment-button value="presion">\r
      <ion-label>Presi\xF3n</ion-label>\r
    </ion-segment-button>\r
    <ion-segment-button value="general">\r
      <ion-label>General</ion-label>\r
    </ion-segment-button>\r
  </ion-segment>\r
\r
  <div class="input-card">\r
    \r
    <div *ngIf="tipoRegistro === 'diabetes'" class="animate-fade">\r
      <div class="icon-header blue">\r
        <ion-icon name="water-outline"></ion-icon>\r
      </div>\r
      <h4>Registro de Glucosa</h4>\r
      <p class="desc">Ingresa tu nivel actual en mg/dL</p>\r
\r
      <ion-item lines="none" class="custom-input">\r
        <ion-input type="number" [(ngModel)]="glucosa" placeholder="Ej. 110"></ion-input>\r
        <span slot="end" class="unit">mg/dL</span>\r
      </ion-item>\r
\r
      <ion-button expand="block" class="btn-save blue" (click)="guardar('diabetes')">\r
        <ion-icon slot="start" name="save-outline"></ion-icon>\r
        Guardar\r
      </ion-button>\r
    </div>\r
\r
    <div *ngIf="tipoRegistro === 'presion'" class="animate-fade">\r
      <div class="icon-header red">\r
        <ion-icon name="pulse-outline"></ion-icon>\r
      </div>\r
      <h4>Presi\xF3n Arterial</h4>\r
      <p class="desc">Sist\xF3lica (Alta) / Diast\xF3lica (Baja)</p>\r
\r
      <div class="pressure-row">\r
        <ion-item lines="none" class="custom-input half">\r
          <ion-input type="number" [(ngModel)]="presionSistolica" placeholder="120"></ion-input>\r
        </ion-item>\r
        <span class="slash">/</span>\r
        <ion-item lines="none" class="custom-input half">\r
          <ion-input type="number" [(ngModel)]="presionDiastolica" placeholder="80"></ion-input>\r
        </ion-item>\r
      </div>\r
\r
      <ion-button expand="block" class="btn-save red" (click)="guardar('presion')">\r
        <ion-icon slot="start" name="save-outline"></ion-icon>\r
        Guardar\r
      </ion-button>\r
    </div>\r
\r
    <div *ngIf="tipoRegistro === 'general'" class="animate-fade">\r
      <div class="icon-header orange">\r
        <ion-icon name="document-text-outline"></ion-icon>\r
      </div>\r
      <h4>Notas Generales</h4>\r
      <p class="desc">S\xEDntomas, comidas o actividad f\xEDsica</p>\r
\r
      <ion-item lines="none" class="custom-input area">\r
        <ion-textarea rows="4" [(ngModel)]="notas" placeholder="Escribe aqu\xED c\xF3mo te sientes..."></ion-textarea>\r
      </ion-item>\r
\r
      <ion-button expand="block" class="btn-save orange" (click)="guardar('general')">\r
        <ion-icon slot="start" name="save-outline"></ion-icon>\r
        Guardar\r
      </ion-button>\r
    </div>\r
\r
  </div>\r
\r
</ion-content>`, styles: ["/* src/app/tab6/tab6.page.scss */\nion-content {\n  --background: #f8f9fa;\n}\n.header-title {\n  font-weight: 700;\n  color: #333;\n}\n.water-card {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.water-card .water-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.water-card .water-header .icon-circle {\n  width: 40px;\n  height: 40px;\n  background: #e3f2fd;\n  color: #2196f3;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.water-card .water-header .text-info h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #333;\n}\n.water-card .water-header .text-info p {\n  margin: 2px 0 0 0;\n  font-size: 13px;\n  color: #666;\n}\n.water-card .bottle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n.water-card .bottle-neck {\n  width: 40px;\n  height: 15px;\n  background: #e0e0e0;\n  border: 2px solid #ccc;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n}\n.water-card .bottle-body {\n  width: 100px;\n  height: 160px;\n  border: 3px solid #ccc;\n  border-radius: 0 0 20px 20px;\n  background: #fff;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);\n}\n.water-card .water-block {\n  flex: 1;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  transition: background 0.3s ease;\n  background: transparent;\n}\n.water-card .water-block.filled {\n  background: #42a5f5;\n  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.1);\n}\n.water-card .water-block:last-child {\n  border-bottom: none;\n}\n.water-card .water-hint {\n  font-size: 12px;\n  color: #999;\n  margin-top: 10px;\n}\n.wellness-card {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.wellness-card h3 {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #555;\n}\n.mood-selector {\n  display: flex;\n  justify-content: space-between;\n}\n.mood-selector ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 50px;\n  width: 50px;\n}\n.mood-selector ion-button ion-icon {\n  font-size: 35px;\n  opacity: 0.3;\n  transition: 0.3s;\n}\n.mood-selector ion-button.selected ion-icon {\n  opacity: 1;\n  transform: scale(1.2);\n}\n.mood-label {\n  color: #3880ff;\n  font-weight: 600;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.custom-segment {\n  margin-bottom: 20px;\n}\n.section-title {\n  font-weight: 700;\n  color: #333;\n  margin: 10px 0 10px 5px;\n}\n.input-card {\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n.input-card h4 {\n  margin: 10px 0 5px 0;\n  font-weight: 700;\n  color: #333;\n}\n.input-card .desc {\n  margin: 0 0 20px 0;\n  font-size: 13px;\n  color: #888;\n}\n.icon-header {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-header ion-icon {\n  font-size: 30px;\n}\n.icon-header.blue {\n  background: #e3edfb;\n  color: #3880ff;\n}\n.icon-header.red {\n  background: #fde8e8;\n  color: #eb445a;\n}\n.icon-header.orange {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.custom-input {\n  --background: #f0f4f8;\n  border-radius: 12px;\n  --padding-start: 15px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.custom-input ion-input {\n  font-size: 18px;\n  font-weight: 600;\n}\n.custom-input .unit {\n  font-size: 14px;\n  color: #888;\n  margin-right: 15px;\n}\n.custom-input.area {\n  --border-radius: 15px;\n}\n.pressure-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.pressure-row .half {\n  margin-bottom: 0;\n}\n.pressure-row .slash {\n  font-size: 24px;\n  color: #ccc;\n  font-weight: 300;\n}\n.btn-save {\n  --border-radius: 12px;\n  font-weight: 600;\n  height: 50px;\n}\n.btn-save.blue {\n  --background: #3880ff;\n  --box-shadow: 0 4px 10px rgba(56, 128, 255, 0.3);\n}\n.btn-save.red {\n  --background: #eb445a;\n  --box-shadow: 0 4px 10px rgba(235, 68, 90, 0.3);\n}\n.btn-save.orange {\n  --background: #ff9800;\n  --box-shadow: 0 4px 10px rgba(255, 152, 0, 0.3);\n}\n.animate-fade {\n  animation: fadeIn 0.4s ease-in;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=tab6.page.css.map */\n"] }]
  }], () => [{ type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab6Page, { className: "Tab6Page", filePath: "src/app/tab6/tab6.page.ts", lineNumber: 18 });
})();
export {
  Tab6Page
};
//# sourceMappingURL=tab6.page-RVB4UPSP.js.map
