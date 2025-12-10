import {
  DataService
} from "./chunk-TMJ67NVR.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonicModule
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
  calendarNumberOutline,
  heartCircleOutline,
  mapOutline,
  medkitOutline,
  notificationsOutline
} from "./chunk-QMCNGXYK.js";
import {
  CommonModule,
  Component,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
import "./chunk-UL2P3LPA.js";

// src/app/tab1/tab1.page.ts
function Tab1Page_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function Tab1Page_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2, "Tu salud al d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Tienes ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " recordatorios pendientes.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cantidadPendientes);
  }
}
function Tab1Page_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2, "Todo despejado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tienes recordatorios activos.");
    \u0275\u0275elementEnd()();
  }
}
var _Tab1Page = class _Tab1Page {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.cantidadPendientes = 0;
    addIcons({ calendarNumberOutline, mapOutline, medkitOutline, heartCircleOutline, notificationsOutline });
  }
  ngOnInit() {
    this.dataService.recordatorios$.subscribe((lista) => {
      this.cantidadPendientes = lista.length;
    });
  }
  irA(ruta) {
    this.router.navigate([ruta]);
  }
};
_Tab1Page.\u0275fac = function Tab1Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1Page)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
};
_Tab1Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab1Page, selectors: [["app-tab1"]], decls: 54, vars: 6, consts: [[1, "ion-no-border", 3, "translucent"], [1, "bg-light", "ion-padding", 3, "fullscreen"], [1, "header-container"], [1, "text-content"], [1, "greeting"], [1, "user-name"], ["fill", "clear", 1, "notif-btn"], ["name", "notifications-outline"], ["class", "badge-dot", 4, "ngIf"], [1, "status-card", "animate-up"], [1, "status-content"], [4, "ngIf"], ["size", "small", "color", "light", 3, "click"], ["src", "https://cdn-icons-png.flaticon.com/512/3063/3063822.png", "alt", "doctor", 1, "status-img"], [1, "section-title"], [1, "ion-no-padding"], ["size", "12"], [1, "action-card", "animate-up", "delay-1", 3, "click"], [1, "icon-box", "blue"], ["name", "calendar-number-outline"], [1, "card-title"], [1, "card-desc"], [1, "action-card", "animate-up", "delay-2", 3, "click"], [1, "icon-box", "green"], ["name", "map-outline"], [1, "action-card", "animate-up", "delay-3", 3, "click"], [1, "icon-box", "orange"], ["name", "medkit-outline"], [1, "action-card", "animate-up", "delay-4", 3, "click"], [1, "icon-box", "red"], ["name", "heart-circle-outline"], [1, "badge-dot"]], template: function Tab1Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-header", 0);
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
    \u0275\u0275text(5, "Hola de nuevo,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 5);
    \u0275\u0275text(7, "Roberto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-button", 6);
    \u0275\u0275element(9, "ion-icon", 7);
    \u0275\u0275template(10, Tab1Page_div_10_Template, 1, 0, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
    \u0275\u0275template(13, Tab1Page_div_13_Template, 8, 1, "div", 11)(14, Tab1Page_div_14_Template, 5, 0, "div", 11);
    \u0275\u0275elementStart(15, "ion-button", 12);
    \u0275\u0275listener("click", function Tab1Page_Template_ion_button_click_15_listener() {
      return ctx.irA("/tabs/tab2");
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3", 14);
    \u0275\u0275text(19, "Acciones R\xE1pidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-grid", 15)(21, "ion-row")(22, "ion-col", 16)(23, "div", 17);
    \u0275\u0275listener("click", function Tab1Page_Template_div_click_23_listener() {
      return ctx.irA("/tabs/tab2");
    });
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275element(25, "ion-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 20);
    \u0275\u0275text(27, "Calendario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 21);
    \u0275\u0275text(29, "Citas y recordatorios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ion-col", 16)(31, "div", 22);
    \u0275\u0275listener("click", function Tab1Page_Template_div_click_31_listener() {
      return ctx.irA("/tabs/tab4");
    });
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275element(33, "ion-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 20);
    \u0275\u0275text(35, "Farmacias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 21);
    \u0275\u0275text(37, "Cerca de ti");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "ion-col", 16)(39, "div", 25);
    \u0275\u0275listener("click", function Tab1Page_Template_div_click_39_listener() {
      return ctx.irA("/tabs/tab5");
    });
    \u0275\u0275elementStart(40, "div", 26);
    \u0275\u0275element(41, "ion-icon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 20);
    \u0275\u0275text(43, "Botiqu\xEDn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 21);
    \u0275\u0275text(45, "Gestionar medicinas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "ion-col", 16)(47, "div", 28);
    \u0275\u0275listener("click", function Tab1Page_Template_div_click_47_listener() {
      return ctx.irA("/tabs/tab6");
    });
    \u0275\u0275elementStart(48, "div", 29);
    \u0275\u0275element(49, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 20);
    \u0275\u0275text(51, "Bienestar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 21);
    \u0275\u0275text(53, "Reportar estado");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.cantidadPendientes > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.cantidadPendientes > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cantidadPendientes === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.cantidadPendientes > 0 ? "Ver Agenda" : "Crear Recordatorio", " ");
  }
}, dependencies: [IonicModule, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, CommonModule, NgIf], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n}\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n}\n.header-container[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n}\n.header-container[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 800;\n  color: #333;\n  letter-spacing: -0.5px;\n}\n.header-container[_ngcontent-%COMP%]   .notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n  color: #333;\n}\n.header-container[_ngcontent-%COMP%]   .notif-btn[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: #eb445a;\n  border-radius: 50%;\n  border: 1px solid white;\n}\n.status-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3880ff 0%,\n      #3dc2ff 100%);\n  border-radius: 20px;\n  padding: 20px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  box-shadow: 0 10px 20px rgba(56, 128, 255, 0.3);\n}\n.status-card[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.status-card[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  font-weight: 700;\n  font-size: 18px;\n}\n.status-card[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 13px;\n  opacity: 0.9;\n  line-height: 1.4;\n}\n.status-card[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #3880ff;\n  font-weight: 600;\n  height: 30px;\n  font-size: 12px;\n  --border-radius: 8px;\n}\n.status-card[_ngcontent-%COMP%]   .status-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 15px;\n  padding-left: 5px;\n}\n.action-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 20px 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: 5px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s;\n}\n.action-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.action-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.action-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.action-card[_ngcontent-%COMP%]   .icon-box.blue[_ngcontent-%COMP%] {\n  background: #e3edfb;\n  color: #3880ff;\n}\n.action-card[_ngcontent-%COMP%]   .icon-box.green[_ngcontent-%COMP%] {\n  background: #e0f2f1;\n  color: #009688;\n}\n.action-card[_ngcontent-%COMP%]   .icon-box.orange[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.action-card[_ngcontent-%COMP%]   .icon-box.red[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #ec407a;\n}\n.action-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n  font-size: 15px;\n  margin-bottom: 2px;\n}\n.action-card[_ngcontent-%COMP%]   .card-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #1a0101;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.delay-1[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.delay-2[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.delay-3[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.delay-4[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=tab1.page.css.map */"] });
var Tab1Page = _Tab1Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab1Page, [{
    type: Component,
    args: [{ selector: "app-tab1", standalone: true, imports: [IonicModule, CommonModule], template: `<ion-header [translucent]="true" class="ion-no-border">
  </ion-header>

<ion-content [fullscreen]="true" class="bg-light ion-padding">
  
  <div class="header-container">
    <div class="text-content">
      <p class="greeting">Hola de nuevo,</p>
      <h1 class="user-name">Roberto</h1>
    </div>
    <ion-button fill="clear" class="notif-btn">
      <ion-icon name="notifications-outline"></ion-icon>
      <div class="badge-dot" *ngIf="cantidadPendientes > 0"></div>
    </ion-button>
  </div>

  <div class="status-card animate-up">
    <div class="status-content">
      
      <div *ngIf="cantidadPendientes > 0">
        <h3>Tu salud al d\xEDa</h3>
        <p>Tienes <strong>{{ cantidadPendientes }}</strong> recordatorios pendientes.</p>
      </div>

      <div *ngIf="cantidadPendientes === 0">
        <h3>Todo despejado</h3>
        <p>No tienes recordatorios activos.</p>
      </div>

      <ion-button size="small" color="light" (click)="irA('/tabs/tab2')">
        {{ cantidadPendientes > 0 ? 'Ver Agenda' : 'Crear Recordatorio' }}
      </ion-button>
    </div>
    <img src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" class="status-img" alt="doctor">
  </div>

  <h3 class="section-title">Acciones R\xE1pidas</h3>

  <ion-grid class="ion-no-padding">
    <ion-row>
      
      <ion-col size="12">
        <div class="action-card animate-up delay-1" (click)="irA('/tabs/tab2')">
          <div class="icon-box blue">
            <ion-icon name="calendar-number-outline"></ion-icon>
          </div>
          <span class="card-title">Calendario</span>
          <span class="card-desc">Citas y recordatorios</span>
        </div>
      </ion-col>

      <ion-col size="12">
        <div class="action-card animate-up delay-2" (click)="irA('/tabs/tab4')">
          <div class="icon-box green">
            <ion-icon name="map-outline"></ion-icon>
          </div>
          <span class="card-title">Farmacias</span>
          <span class="card-desc">Cerca de ti</span>
        </div>
      </ion-col>

      <ion-col size="12">
        <div class="action-card animate-up delay-3" (click)="irA('/tabs/tab5')">
          <div class="icon-box orange">
            <ion-icon name="medkit-outline"></ion-icon>
          </div>
          <span class="card-title">Botiqu\xEDn</span>
          <span class="card-desc">Gestionar medicinas</span>
        </div>
      </ion-col>

      <ion-col size="12">
        <div class="action-card animate-up delay-4" (click)="irA('/tabs/tab6')">
          <div class="icon-box red">
            <ion-icon name="heart-circle-outline"></ion-icon>
          </div>
          <span class="card-title">Bienestar</span>
          <span class="card-desc">Reportar estado</span>
        </div>
      </ion-col>

    </ion-row>
  </ion-grid>

</ion-content>`, styles: ["/* src/app/tab1/tab1.page.scss */\nion-content {\n  --background: #f8f9fa;\n}\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n}\n.header-container .greeting {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n}\n.header-container .user-name {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 800;\n  color: #333;\n  letter-spacing: -0.5px;\n}\n.header-container .notif-btn {\n  position: relative;\n  color: #333;\n}\n.header-container .notif-btn .badge-dot {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: #eb445a;\n  border-radius: 50%;\n  border: 1px solid white;\n}\n.status-card {\n  background:\n    linear-gradient(\n      135deg,\n      #3880ff 0%,\n      #3dc2ff 100%);\n  border-radius: 20px;\n  padding: 20px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  box-shadow: 0 10px 20px rgba(56, 128, 255, 0.3);\n}\n.status-card .status-content {\n  flex: 1;\n}\n.status-card .status-content h3 {\n  margin: 0 0 5px 0;\n  font-weight: 700;\n  font-size: 18px;\n}\n.status-card .status-content p {\n  margin: 0 0 15px 0;\n  font-size: 13px;\n  opacity: 0.9;\n  line-height: 1.4;\n}\n.status-card .status-content ion-button {\n  --color: #3880ff;\n  font-weight: 600;\n  height: 30px;\n  font-size: 12px;\n  --border-radius: 8px;\n}\n.status-card .status-img {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));\n}\n.section-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 15px;\n  padding-left: 5px;\n}\n.action-card {\n  background: white;\n  border-radius: 20px;\n  padding: 20px 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: 5px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s;\n}\n.action-card:active {\n  transform: scale(0.96);\n}\n.action-card .icon-box {\n  width: 55px;\n  height: 55px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.action-card .icon-box ion-icon {\n  font-size: 26px;\n}\n.action-card .icon-box.blue {\n  background: #e3edfb;\n  color: #3880ff;\n}\n.action-card .icon-box.green {\n  background: #e0f2f1;\n  color: #009688;\n}\n.action-card .icon-box.orange {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.action-card .icon-box.red {\n  background: #fce4ec;\n  color: #ec407a;\n}\n.action-card .card-title {\n  font-weight: 700;\n  color: #333;\n  font-size: 15px;\n  margin-bottom: 2px;\n}\n.action-card .card-desc {\n  font-size: 11px;\n  color: #1a0101;\n}\n.animate-up {\n  animation: slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.delay-1 {\n  animation-delay: 0.1s;\n}\n.delay-2 {\n  animation-delay: 0.2s;\n}\n.delay-3 {\n  animation-delay: 0.3s;\n}\n.delay-4 {\n  animation-delay: 0.4s;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=tab1.page.css.map */\n"] }]
  }], () => [{ type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab1Page, { className: "Tab1Page", filePath: "src/app/tab1/tab1.page.ts", lineNumber: 16 });
})();
export {
  Tab1Page
};
//# sourceMappingURL=tab1.page-62KATR3J.js.map
