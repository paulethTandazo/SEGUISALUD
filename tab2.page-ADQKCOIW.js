import {
  DataService
} from "./chunk-TMJ67NVR.js";
import {
  AlertController,
  IonBadge,
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonicModule,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-4X5WS6KO.js";
import {
  registerPlugin
} from "./chunk-QLP6PVC3.js";
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
  alarmOutline,
  checkmarkCircleOutline,
  colorPaletteOutline,
  createOutline,
  medkitOutline,
  notificationsOutline,
  timeOutline,
  trashOutline
} from "./chunk-QMCNGXYK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Platform,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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

// node_modules/@capacitor/local-notifications/dist/esm/definitions.js
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["Sunday"] = 1] = "Sunday";
  Weekday2[Weekday2["Monday"] = 2] = "Monday";
  Weekday2[Weekday2["Tuesday"] = 3] = "Tuesday";
  Weekday2[Weekday2["Wednesday"] = 4] = "Wednesday";
  Weekday2[Weekday2["Thursday"] = 5] = "Thursday";
  Weekday2[Weekday2["Friday"] = 6] = "Friday";
  Weekday2[Weekday2["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));

// node_modules/@capacitor/local-notifications/dist/esm/index.js
var LocalNotifications = registerPlugin("LocalNotifications", {
  web: () => import("./web-RLUOPFWW.js").then((m) => new m.LocalNotificationsWeb())
});

// src/app/tab2/tab2.page.ts
function Tab2Page_ion_select_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const med_r1 = ctx.$implicit;
    \u0275\u0275property("value", med_r1.nombre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", med_r1.nombre, " (", med_r1.cantidadActual, " rest.) ");
  }
}
function Tab2Page_ion_item_35_ion_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.medicina, " ");
  }
}
function Tab2Page_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "ion-icon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, Tab2Page_ion_item_35_ion_badge_10_Template, 2, 1, "ion-badge", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-button", 32);
    \u0275\u0275listener("click", function Tab2Page_ion_item_35_Template_ion_button_click_11_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.completarTarea(item_r3));
    });
    \u0275\u0275element(12, "ion-icon", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", item_r3.color);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.texto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, item_r3.fecha, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r3.medicina);
  }
}
function Tab2Page_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p");
    \u0275\u0275text(2, "No tienes dosis pendientes.");
    \u0275\u0275elementEnd()();
  }
}
var _Tab2Page = class _Tab2Page {
  constructor(alertCtrl, toastCtrl, dataService, platform) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.dataService = dataService;
    this.platform = platform;
    this.fechaSeleccionada = this.getFechaLocalISO();
    this.nuevoRecordatorio = "";
    this.listaRecordatorios = [];
    this.listaMedicamentos = [];
    this.medicamentoVinculado = "";
    this.coloresFlashcard = ["#ffcdd2", "#b3e5fc", "#c8e6c9", "#ffe0b2", "#e1bee7"];
    this.indiceColor = 1;
    this.colorActual = this.coloresFlashcard[this.indiceColor];
    this.audio = new Audio("assets/alarm.mp3");
    this.miCorreo = "usuario@seguisalud.com";
    addIcons({ checkmarkCircleOutline, trashOutline, notificationsOutline, alarmOutline, createOutline, colorPaletteOutline, timeOutline, medkitOutline });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.dataService.recordatorios$.subscribe((datos) => {
        this.listaRecordatorios = datos;
      });
      this.dataService.medicamentos$.subscribe((meds) => {
        this.listaMedicamentos = meds;
      });
      if (this.platform.is("hybrid")) {
        yield LocalNotifications.requestPermissions();
        yield LocalNotifications.createChannel({
          id: "alarmas_salud",
          name: "Alarmas de Medicaci\xF3n",
          importance: 5,
          sound: "res://platform_default",
          visibility: 1,
          vibration: true
        });
      } else {
        if (Notification.permission !== "granted") {
          Notification.requestPermission();
        }
        this.iniciarRelojWeb();
      }
    });
  }
  ngOnDestroy() {
    if (this.intervaloWeb)
      clearInterval(this.intervaloWeb);
  }
  getFechaLocalISO() {
    const now = /* @__PURE__ */ new Date();
    const tzOffset = now.getTimezoneOffset() * 6e4;
    return new Date(now.getTime() - tzOffset).toISOString().slice(0, -1);
  }
  cambiarColor() {
    this.indiceColor++;
    if (this.indiceColor >= this.coloresFlashcard.length) {
      this.indiceColor = 0;
    }
    this.colorActual = this.coloresFlashcard[this.indiceColor];
  }
  alSeleccionarMedicamento() {
    if (this.medicamentoVinculado) {
      this.nuevoRecordatorio = `Tomar dosis de ${this.medicamentoVinculado}`;
    }
  }
  cambioFecha(event) {
    this.fechaSeleccionada = event.detail.value;
  }
  agregarRecordatorio() {
    return __async(this, null, function* () {
      if (this.nuevoRecordatorio.trim().length < 1) {
        return;
      }
      const fechaDate = new Date(this.fechaSeleccionada);
      const tarea = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        texto: this.nuevoRecordatorio,
        fecha: this.fechaSeleccionada,
        color: this.colorActual,
        medicina: this.medicamentoVinculado,
        yaSono: false
      };
      this.dataService.agregarRecordatorio(tarea);
      if (this.platform.is("hybrid")) {
        yield this.programarNotificacionNativa(tarea, fechaDate);
      }
      yield this.mostrarAlertaConfirmacion(tarea.texto, tarea.fecha);
      this.nuevoRecordatorio = "";
      this.medicamentoVinculado = "";
    });
  }
  completarTarea(item) {
    return __async(this, null, function* () {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.dataService.eliminarRecordatorio(item.id);
      if (item.medicina) {
        this.dataService.descontarDosis(item.medicina);
      }
      let mensaje = "\u2705 Dosis completada.";
      if (item.medicina) {
        mensaje += ` Inventario de ${item.medicina} actualizado.`;
      }
      const toast = yield this.toastCtrl.create({
        message: mensaje,
        duration: 3e3,
        position: "bottom",
        color: "success"
      });
      toast.present();
    });
  }
  programarNotificacionNativa(item, fecha) {
    return __async(this, null, function* () {
      yield LocalNotifications.schedule({
        notifications: [{
          title: "\u{1F48A} Hora de tu medicaci\xF3n",
          body: item.texto,
          id: item.id,
          schedule: { at: fecha },
          channelId: "alarmas_salud",
          sound: "res://platform_default"
        }]
      });
    });
  }
  iniciarRelojWeb() {
    this.intervaloWeb = setInterval(() => {
      this.verificarAlarmas();
    }, 2e3);
  }
  verificarAlarmas() {
    const ahora = /* @__PURE__ */ new Date();
    this.listaRecordatorios.forEach((item) => {
      const fechaRecordatorio = new Date(item.fecha);
      if (!item.yaSono && this.esMismoMinuto(ahora, fechaRecordatorio)) {
        item.yaSono = true;
        this.activarAlarmaWeb(item);
      }
    });
  }
  esMismoMinuto(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate() && d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes();
  }
  activarAlarmaWeb(item) {
    return __async(this, null, function* () {
      try {
        this.audio.loop = true;
        yield this.audio.play();
      } catch (e) {
        console.log("Audio bloqueado");
      }
      const alert = yield this.alertCtrl.create({
        header: "\xA1ALARMA!",
        subHeader: "Hora de tu medicamento",
        message: item.texto,
        backdropDismiss: false,
        buttons: [{
          text: "\u2705 Ya me la tom\xE9 (Apagar)",
          handler: () => {
            this.completarTarea(item);
          }
        }],
        cssClass: "alarm-alert"
      });
      yield alert.present();
    });
  }
  mostrarAlertaConfirmacion(titulo, fechaIso) {
    return __async(this, null, function* () {
      const fechaLegible = new Date(fechaIso).toLocaleString();
      const alert = yield this.alertCtrl.create({
        header: "\xA1Recordatorio Guardado!",
        message: `Se ha programado: ${titulo}

Para el: ${fechaLegible}

Respaldo enviado a:
${this.miCorreo}`,
        buttons: ["Entendido"],
        cssClass: "custom-alert"
      });
      yield alert.present();
    });
  }
};
_Tab2Page.\u0275fac = function Tab2Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab2Page)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Platform));
};
_Tab2Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab2Page, selectors: [["app-tab2"]], decls: 37, vars: 11, consts: [[1, "ion-no-border", 3, "translucent"], [2, "--background", "#f8f9fa"], [2, "color", "#333", "font-weight", "700"], [1, "ion-padding", 3, "fullscreen"], [1, "flashcard-container"], [1, "card-header"], ["fill", "clear", 1, "btn-color", 3, "click"], ["name", "color-palette-outline", "slot", "icon-only"], [1, "input-group"], ["name", "medkit-outline", 2, "vertical-align", "middle"], ["interface", "popover", "placeholder", "Selecciona uno...", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "2", "placeholder", "Ej. Recordatorio para dosis de...", 3, "ngModelChange", "ngModel"], [1, "mini-calendar"], [1, "calendar-label"], ["name", "time-outline"], ["presentation", "date-time", "size", "cover", 3, "ngModelChange", "ionChange", "preferWheel", "ngModel"], ["expand", "block", 1, "btn-save-card", 3, "click"], ["name", "notifications-outline", "slot", "start"], [1, "list-wrapper"], [2, "padding-left", "0", "margin-bottom", "10px"], [2, "font-size", "18px", "font-weight", "700", "color", "#333"], ["lines", "none", 2, "background", "transparent"], ["class", "task-item", 4, "ngFor", "ngForOf"], ["class", "ion-text-center ion-padding", "style", "color: #999;", 4, "ngIf"], [3, "value"], [1, "task-item"], [1, "task-card"], [1, "icon-box"], ["name", "alarm-outline"], [1, "task-info"], ["color", "light", "style", "margin-top: 5px; opacity: 0.8", 4, "ngIf"], ["fill", "clear", 1, "btn-check", 3, "click"], ["name", "checkmark-circle-outline", "slot", "icon-only"], ["color", "light", 2, "margin-top", "5px", "opacity", "0.8"], [1, "ion-text-center", "ion-padding", 2, "color", "#999"]], template: function Tab2Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
    \u0275\u0275text(3, "Mi Agenda");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 3)(5, "div", 4)(6, "div", 5)(7, "h3");
    \u0275\u0275text(8, "Nueva Dosis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-button", 6);
    \u0275\u0275listener("click", function Tab2Page_Template_ion_button_click_9_listener() {
      return ctx.cambiarColor();
    });
    \u0275\u0275element(10, "ion-icon", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "ion-label");
    \u0275\u0275element(13, "ion-icon", 9);
    \u0275\u0275text(14, " Medicamento del Botiqu\xEDn ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function Tab2Page_Template_ion_select_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.medicamentoVinculado, $event) || (ctx.medicamentoVinculado = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function Tab2Page_Template_ion_select_ionChange_15_listener() {
      return ctx.alSeleccionarMedicamento();
    });
    \u0275\u0275template(16, Tab2Page_ion_select_option_16_Template, 2, 3, "ion-select-option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 8)(18, "ion-label");
    \u0275\u0275text(19, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function Tab2Page_Template_ion_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuevoRecordatorio, $event) || (ctx.nuevoRecordatorio = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13)(22, "div", 14);
    \u0275\u0275element(23, "ion-icon", 15);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Fecha y Hora");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-datetime", 16);
    \u0275\u0275twoWayListener("ngModelChange", function Tab2Page_Template_ion_datetime_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaSeleccionada, $event) || (ctx.fechaSeleccionada = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function Tab2Page_Template_ion_datetime_ionChange_26_listener($event) {
      return ctx.cambioFecha($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-button", 17);
    \u0275\u0275listener("click", function Tab2Page_Template_ion_button_click_27_listener() {
      return ctx.agregarRecordatorio();
    });
    \u0275\u0275element(28, "ion-icon", 18);
    \u0275\u0275text(29, " Programar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19)(31, "ion-list-header", 20)(32, "ion-label", 21);
    \u0275\u0275text(33, "Pr\xF3ximas Dosis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ion-list", 22);
    \u0275\u0275template(35, Tab2Page_ion_item_35_Template, 13, 8, "ion-item", 23)(36, Tab2Page_div_36_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx.colorActual);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.medicamentoVinculado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listaMedicamentos);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRecordatorio);
    \u0275\u0275advance(6);
    \u0275\u0275property("preferWheel", true);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaSeleccionada);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.listaRecordatorios);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.listaRecordatorios.length === 0);
  }
}, dependencies: [IonicModule, IonBadge, IonButton, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, DatePipe], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n}\n.flashcard-container[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  padding: 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 30px;\n  transition: background 0.3s ease;\n}\n.flashcard-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.flashcard-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  color: #333;\n  opacity: 0.8;\n}\n.flashcard-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn-color[_ngcontent-%COMP%] {\n  --color: #333;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.flashcard-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 15px;\n  padding: 10px 15px;\n  margin-bottom: 15px;\n}\n.flashcard-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 5px;\n}\n.flashcard-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%], \n.flashcard-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  font-weight: 600;\n  color: #222;\n}\n.flashcard-container[_ngcontent-%COMP%]   .mini-calendar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n.flashcard-container[_ngcontent-%COMP%]   .mini-calendar[_ngcontent-%COMP%]   .calendar-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-left: 10px;\n  margin-bottom: 5px;\n  color: #555;\n  font-size: 13px;\n  font-weight: 600;\n}\n.flashcard-container[_ngcontent-%COMP%]   .mini-calendar[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  --background: transparent;\n  border-radius: 15px;\n  margin: 0 auto;\n}\n.flashcard-container[_ngcontent-%COMP%]   .btn-save-card[_ngcontent-%COMP%] {\n  --background: #333;\n  --color: white;\n  --border-radius: 15px;\n  font-weight: 700;\n  height: 50px;\n  --box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n}\n.list-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n.task-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  color: #333;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: #222;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #444;\n  margin: 0;\n  font-weight: 500;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .btn-check[_ngcontent-%COMP%] {\n  --color: #222;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.task-item[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .btn-check[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #198754;\n}\n  .alarm-alert {\n  --ion-text-color: #333;\n}\n  .alarm-alert .alert-wrapper {\n  border: 2px solid #eb445a;\n  box-shadow: 0 0 20px rgba(235, 68, 90, 0.5);\n}\n  .alarm-alert .alert-head h2 {\n  color: #eb445a;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=tab2.page.css.map */"] });
var Tab2Page = _Tab2Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab2Page, [{
    type: Component,
    args: [{ selector: "app-tab2", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: `<ion-header [translucent]="true" class="ion-no-border">
  <ion-toolbar style="--background: #f8f9fa;">
    <ion-title style="color: #333; font-weight: 700;">Mi Agenda</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true" class="ion-padding">

  <div class="flashcard-container" [style.background]="colorActual">
    
    <div class="card-header">
      <h3>Nueva Dosis</h3>
      <ion-button fill="clear" class="btn-color" (click)="cambiarColor()">
        <ion-icon name="color-palette-outline" slot="icon-only"></ion-icon>
      </ion-button>
    </div>

    <div class="input-group">
      <ion-label>
        <ion-icon name="medkit-outline" style="vertical-align: middle;"></ion-icon>
        Medicamento del Botiqu\xEDn
      </ion-label>
      
      <ion-select 
        [(ngModel)]="medicamentoVinculado" 
        (ionChange)="alSeleccionarMedicamento()" 
        interface="popover" 
        placeholder="Selecciona uno...">
        
        <ion-select-option *ngFor="let med of listaMedicamentos" [value]="med.nombre">
          {{ med.nombre }} ({{ med.cantidadActual }} rest.)
        </ion-select-option>

      </ion-select>
    </div>

    <div class="input-group">
      <ion-label>Descripci\xF3n</ion-label>
      <ion-textarea 
        [(ngModel)]="nuevoRecordatorio" 
        rows="2" 
        placeholder="Ej. Recordatorio para dosis de...">
      </ion-textarea>
    </div>

    <div class="mini-calendar">
      <div class="calendar-label">
        <ion-icon name="time-outline"></ion-icon>
        <span>Fecha y Hora</span>
      </div>
      <ion-datetime 
        presentation="date-time" 
        size="cover" 
        [preferWheel]="true"
        [(ngModel)]="fechaSeleccionada"
        (ionChange)="cambioFecha($event)">
      </ion-datetime>
    </div>

    <ion-button expand="block" (click)="agregarRecordatorio()" class="btn-save-card">
      <ion-icon name="notifications-outline" slot="start"></ion-icon>
      Programar
    </ion-button>

  </div>

  <div class="list-wrapper">
    <ion-list-header style="padding-left: 0; margin-bottom: 10px;">
      <ion-label style="font-size: 18px; font-weight: 700; color: #333;">Pr\xF3ximas Dosis</ion-label>
    </ion-list-header>

    <ion-list lines="none" style="background: transparent;">
      
      <ion-item *ngFor="let item of listaRecordatorios" class="task-item">
        <div class="task-card" [style.background]="item.color">
          
          <div class="icon-box">
            <ion-icon name="alarm-outline"></ion-icon>
          </div>
          
          <div class="task-info">
            <h2>{{ item.texto }}</h2>
            <p>{{ item.fecha | date:'short' }}</p>
            <ion-badge color="light" *ngIf="item.medicina" style="margin-top: 5px; opacity: 0.8">
              {{ item.medicina }}
            </ion-badge>
          </div>

          <ion-button fill="clear" (click)="completarTarea(item)" class="btn-check">
            <ion-icon name="checkmark-circle-outline" slot="icon-only"></ion-icon>
          </ion-button>

        </div>
      </ion-item>
      
      <div *ngIf="listaRecordatorios.length === 0" class="ion-text-center ion-padding" style="color: #999;">
        <p>No tienes dosis pendientes.</p>
      </div>

    </ion-list>
  </div>

</ion-content>`, styles: ["/* src/app/tab2/tab2.page.scss */\nion-content {\n  --background: #f8f9fa;\n}\n.flashcard-container {\n  border-radius: 25px;\n  padding: 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 30px;\n  transition: background 0.3s ease;\n}\n.flashcard-container .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.flashcard-container .card-header h3 {\n  margin: 0;\n  font-weight: 800;\n  color: #333;\n  opacity: 0.8;\n}\n.flashcard-container .card-header .btn-color {\n  --color: #333;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.flashcard-container .input-group {\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 15px;\n  padding: 10px 15px;\n  margin-bottom: 15px;\n}\n.flashcard-container .input-group ion-label {\n  font-size: 12px;\n  color: #666;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 5px;\n}\n.flashcard-container .input-group ion-select,\n.flashcard-container .input-group ion-textarea {\n  --padding-start: 0;\n  font-weight: 600;\n  color: #222;\n}\n.flashcard-container .mini-calendar {\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n.flashcard-container .mini-calendar .calendar-label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-left: 10px;\n  margin-bottom: 5px;\n  color: #555;\n  font-size: 13px;\n  font-weight: 600;\n}\n.flashcard-container .mini-calendar ion-datetime {\n  --background: transparent;\n  border-radius: 15px;\n  margin: 0 auto;\n}\n.flashcard-container .btn-save-card {\n  --background: #333;\n  --color: white;\n  --border-radius: 15px;\n  font-weight: 700;\n  height: 50px;\n  --box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n}\n.list-wrapper {\n  padding-bottom: 40px;\n}\n.task-item {\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n}\n.task-item .task-card {\n  width: 100%;\n  padding: 15px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n}\n.task-item .task-card .icon-box {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  color: #333;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n.task-item .task-card .icon-box ion-icon {\n  font-size: 24px;\n}\n.task-item .task-card .task-info {\n  flex: 1;\n}\n.task-item .task-card .task-info h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: #222;\n}\n.task-item .task-card .task-info p {\n  font-size: 13px;\n  color: #444;\n  margin: 0;\n  font-weight: 500;\n}\n.task-item .task-card .btn-check {\n  --color: #222;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.task-item .task-card .btn-check ion-icon {\n  font-size: 24px;\n  color: #198754;\n}\n::ng-deep .alarm-alert {\n  --ion-text-color: #333;\n}\n::ng-deep .alarm-alert .alert-wrapper {\n  border: 2px solid #eb445a;\n  box-shadow: 0 0 20px rgba(235, 68, 90, 0.5);\n}\n::ng-deep .alarm-alert .alert-head h2 {\n  color: #eb445a;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=tab2.page.css.map */\n"] }]
  }], () => [{ type: AlertController }, { type: ToastController }, { type: DataService }, { type: Platform }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab2Page, { className: "Tab2Page", filePath: "src/app/tab2/tab2.page.ts", lineNumber: 17 });
})();
export {
  Tab2Page
};
//# sourceMappingURL=tab2.page-ADQKCOIW.js.map
