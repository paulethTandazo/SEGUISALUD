import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSpinner,
  IonTitle,
  IonToolbar,
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
  CommonModule,
  Component,
  HttpClient,
  NgForOf,
  NgIf,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/tab4/tab4.page.ts
function Tab4Page_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "ion-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function Tab4Page_h3_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Resultados (", ctx_r0.farmacias.length, ") ");
  }
}
function Tab4Page_div_14_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 25);
  }
}
function Tab4Page_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275template(9, Tab4Page_div_14_ion_icon_9_Template, 1, 0, "ion-icon", 21);
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 23)(13, "ion-button", 24);
    \u0275\u0275listener("click", function Tab4Page_div_14_Template_ion_button_click_13_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.verDetalle(f_r3));
    });
    \u0275\u0275text(14, " Ver ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", f_r3.imagen, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r3.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.direccion);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getEstrellas(f_r3.rate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.rate);
  }
}
function Tab4Page_ng_template_16_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 29)(1, "div", 30);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-list", 33)(8, "ion-item");
    \u0275\u0275element(9, "ion-icon", 34);
    \u0275\u0275elementStart(10, "ion-label")(11, "h3");
    \u0275\u0275text(12, "Horario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "8am a 9pm (Horarios var\xEDan en feriados)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-item");
    \u0275\u0275element(16, "ion-icon", 35);
    \u0275\u0275elementStart(17, "ion-label")(18, "h3");
    \u0275\u0275text(19, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "188652165");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "ion-button", 36);
    \u0275\u0275listener("click", function Tab4Page_ng_template_16_ion_content_7_Template_ion_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.comoLlegar());
    });
    \u0275\u0275element(24, "ion-icon", 37);
    \u0275\u0275text(25, " C\xF3mo llegar (Google Maps) ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.farmaciaSeleccionada.imagen, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.farmaciaSeleccionada.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.farmaciaSeleccionada.direccion);
  }
}
function Tab4Page_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Detalle de Farmacia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 26)(5, "ion-button", 27);
    \u0275\u0275listener("click", function Tab4Page_ng_template_16_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(6, "Cerrar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(7, Tab4Page_ng_template_16_ion_content_7_Template, 26, 3, "ion-content", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.farmaciaSeleccionada);
  }
}
var _Tab4Page = class _Tab4Page {
  constructor(http) {
    this.http = http;
    this.farmacias = [];
    this.cargando = false;
    this.ubicacionActual = null;
    this.farmaciaSeleccionada = null;
    this.isModalOpen = false;
  }
  compartirUbicacion() {
    this.cargando = true;
    this.farmacias = [];
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ubicacionActual = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.buscarFarmaciasEnOpenStreet(this.ubicacionActual.lat, this.ubicacionActual.lng);
      }, (error) => {
        console.error("Error", error);
        this.cargando = false;
        alert("Activa tu GPS para encontrar farmacias.");
      });
    } else {
      alert("Navegador no soporta GPS.");
      this.cargando = false;
    }
  }
  buscarFarmaciasEnOpenStreet(lat, lng) {
    const query = `
      [out:json][timeout:25];
      (
        node["amenity"="pharmacy"](around:10000,${lat},${lng});
        way["amenity"="pharmacy"](around:10000,${lat},${lng});
      );
      out center;
    `;
    const url = "https://overpass-api.de/api/interpreter";
    this.http.post(url, `data=${encodeURIComponent(query)}`, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).subscribe({
      next: (response) => {
        this.procesarDatos(response.elements);
        this.cargando = false;
      },
      error: (err) => {
        this.cargando = false;
      }
    });
  }
  procesarDatos(elementos) {
    this.farmacias = elementos.map((item, index) => {
      const nombre = item.tags.name || `Farmacia #${index + 1}`;
      const direccion = item.tags["addr:street"] ? `${item.tags["addr:street"]} ${item.tags["addr:housenumber"] || ""}` : "Ver ubicaci\xF3n en mapa";
      const horario = item.tags.opening_hours || "Horario no disponible";
      const telefono = item.tags.phone || "No registrado";
      const randomRate = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
      return {
        id: item.id,
        lat: item.lat || item.center.lat,
        // OpenStreet devuelve lat/lon directo en nodes o en center en ways
        lng: item.lon || item.center.lon,
        nombre,
        direccion,
        horario,
        telefono,
        rate: randomRate,
        imagen: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
      };
    });
    if (this.farmacias.length === 0) {
      alert("No se encontraron farmacias cerca.");
    }
  }
  // --- NUEVAS FUNCIONES ---
  // 1. Abrir el Modal con la info
  verDetalle(farmacia) {
    this.farmaciaSeleccionada = farmacia;
    this.isModalOpen = true;
  }
  // 2. Cerrar el Modal
  cerrarModal() {
    this.isModalOpen = false;
  }
  // 3. Abrir Google Maps con la ruta
  comoLlegar() {
    if (!this.farmaciaSeleccionada)
      return;
    const lat = this.farmaciaSeleccionada.lat;
    const lng = this.farmaciaSeleccionada.lng;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, "_system");
  }
  getEstrellas(rate) {
    return new Array(Math.floor(Number(rate)));
  }
};
_Tab4Page.\u0275fac = function Tab4Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab4Page)(\u0275\u0275directiveInject(HttpClient));
};
_Tab4Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab4Page, selectors: [["app-tab4"]], decls: 17, vars: 8, consts: [[1, "ion-no-border", 3, "translucent"], [1, "header-title"], [1, "bg-light", "ion-padding", 3, "fullscreen"], [1, "location-box", "ion-text-center"], [1, "loc-text"], ["expand", "block", 1, "btn-location", 3, "click", "disabled"], ["slot", "start", "name", "navigate-circle-outline"], ["class", "ion-margin-top", 4, "ngIf"], ["class", "section-title", 4, "ngIf"], [1, "pharmacy-list"], ["class", "pharmacy-card", 4, "ngFor", "ngForOf"], [3, "didDismiss", "isOpen"], [1, "ion-margin-top"], ["name", "crescent", "color", "primary"], [1, "section-title"], [1, "pharmacy-card"], [1, "card-img"], ["alt", "logo farmacia", 3, "src"], [1, "card-info"], [1, "address"], [1, "rating-container"], ["name", "star", "color", "warning", 4, "ngFor", "ngForOf"], [1, "rate-number"], [1, "card-action"], ["size", "small", "shape", "round", "color", "primary", 3, "click"], ["name", "star", "color", "warning"], ["slot", "end"], [3, "click"], ["class", "ion-padding", 4, "ngIf"], [1, "ion-padding"], [1, "modal-content", "ion-text-center"], [2, "width", "80px", "margin-bottom", "10px", 3, "src"], [2, "color", "#666", "margin-bottom", "20px"], ["lines", "none", 1, "detail-list"], ["name", "time-outline", "slot", "start", "color", "medium"], ["name", "call-outline", "slot", "start", "color", "medium"], ["expand", "block", "color", "success", 3, "click"], ["name", "map-outline", "slot", "start"]], template: function Tab4Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
    \u0275\u0275text(3, "Farmacias GPS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 2)(5, "div", 3)(6, "p", 4);
    \u0275\u0275text(7, "Encuentra medicamentos cerca de ti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 5);
    \u0275\u0275listener("click", function Tab4Page_Template_ion_button_click_8_listener() {
      return ctx.compartirUbicacion();
    });
    \u0275\u0275element(9, "ion-icon", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, Tab4Page_div_11_Template, 2, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Tab4Page_h3_12_Template, 2, 1, "h3", 8);
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275template(14, Tab4Page_div_14_Template, 15, 5, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-modal", 11);
    \u0275\u0275listener("didDismiss", function Tab4Page_Template_ion_modal_didDismiss_15_listener() {
      return ctx.cerrarModal();
    });
    \u0275\u0275template(16, Tab4Page_ng_template_16_Template, 8, 1, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.cargando);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.cargando ? "Buscando sat\xE9lite..." : "Buscar cerca de M\xED", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.farmacias.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.farmacias);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isModalOpen);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonSpinner, IonTitle, IonToolbar, IonModal, CommonModule, NgForOf, NgIf], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n}\n.location-box[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.location-box[_ngcontent-%COMP%]   .loc-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.location-box[_ngcontent-%COMP%]   .btn-location[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --background: #3880ff;\n  --box-shadow: 0 4px 10px rgba(56, 128, 255, 0.3);\n  font-weight: 600;\n  height: 50px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 15px;\n  padding-left: 5px;\n}\n.pharmacy-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #f0f4f8;\n  border-radius: 12px;\n  padding: 10px;\n  margin-right: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #222;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 12px;\n  color: #888;\n  line-height: 1.3;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 1px;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]   .rate-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #666;\n  margin-left: 5px;\n  background: #eee;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.pharmacy-card[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  --box-shadow: none;\n  font-size: 12px;\n  width: 80px;\n}\n/*# sourceMappingURL=tab4.page.css.map */"] });
var Tab4Page = _Tab4Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab4Page, [{
    type: Component,
    args: [{ selector: "app-tab4", standalone: true, imports: [IonicModule, CommonModule], template: `<ion-header [translucent]="true" class="ion-no-border">\r
  <ion-toolbar>\r
    <ion-title class="header-title">Farmacias GPS</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content [fullscreen]="true" class="bg-light ion-padding">\r
\r
  <div class="location-box ion-text-center">\r
    <p class="loc-text">Encuentra medicamentos cerca de ti</p>\r
    \r
    <ion-button expand="block" class="btn-location" (click)="compartirUbicacion()" [disabled]="cargando">\r
      <ion-icon slot="start" name="navigate-circle-outline"></ion-icon>\r
      {{ cargando ? 'Buscando sat\xE9lite...' : 'Buscar cerca de M\xED' }}\r
    </ion-button>\r
\r
    <div *ngIf="cargando" class="ion-margin-top">\r
      <ion-spinner name="crescent" color="primary"></ion-spinner>\r
    </div>\r
  </div>\r
\r
  <h3 class="section-title" *ngIf="farmacias.length > 0">\r
    Resultados ({{ farmacias.length }})\r
  </h3>\r
\r
  <div class="pharmacy-list">\r
    \r
    <div class="pharmacy-card" *ngFor="let f of farmacias">\r
      <div class="card-img">\r
        <img [src]="f.imagen" alt="logo farmacia">\r
      </div>\r
\r
      <div class="card-info">\r
        <h2>{{ f.nombre }}</h2>\r
        <p class="address">{{ f.direccion }}</p>\r
        \r
        <div class="rating-container">\r
          <ion-icon name="star" color="warning" *ngFor="let s of getEstrellas(f.rate)"></ion-icon>\r
          <span class="rate-number">{{ f.rate }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="card-action">\r
        <!-- BOT\xD3N VER AHORA ABRE EL MODAL -->\r
        <ion-button size="small" shape="round" color="primary" (click)="verDetalle(f)">\r
          Ver\r
        </ion-button>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ========================================== -->\r
  <!-- MODAL DE DETALLE (VENTANA EMERGENTE)       -->\r
  <!-- ========================================== -->\r
  <!-- MODIFICACI\xD3N: Se eliminaron los breakpoints para evitar el arrastre -->\r
  <ion-modal [isOpen]="isModalOpen" (didDismiss)="cerrarModal()">\r
    <ng-template>\r
      <ion-header>\r
        <ion-toolbar>\r
          <ion-title>Detalle de Farmacia</ion-title>\r
          <ion-buttons slot="end">\r
            <ion-button (click)="cerrarModal()">Cerrar</ion-button>\r
          </ion-buttons>\r
        </ion-toolbar>\r
      </ion-header>\r
      \r
      <ion-content class="ion-padding" *ngIf="farmaciaSeleccionada">\r
        \r
        <div class="modal-content ion-text-center">\r
          <img [src]="farmaciaSeleccionada.imagen" style="width: 80px; margin-bottom: 10px;">\r
          \r
          <h2>{{ farmaciaSeleccionada.nombre }}</h2>\r
          <p style="color: #666; margin-bottom: 20px;">{{ farmaciaSeleccionada.direccion }}</p>\r
\r
          <ion-list lines="none" class="detail-list">\r
            <ion-item>\r
              <ion-icon name="time-outline" slot="start" color="medium"></ion-icon>\r
              <ion-label>\r
                <h3>Horario</h3>\r
                <p>8am a 9pm (Horarios var\xEDan en feriados)</p>\r
              </ion-label>\r
            </ion-item>\r
            <ion-item>\r
              <ion-icon name="call-outline" slot="start" color="medium"></ion-icon>\r
              <ion-label>\r
                <h3>Tel\xE9fono</h3>\r
                <p>188652165</p>\r
              </ion-label>\r
            </ion-item>\r
          </ion-list>\r
\r
          <br>\r
\r
          <ion-button expand="block" color="success" (click)="comoLlegar()">\r
            <ion-icon name="map-outline" slot="start"></ion-icon>\r
            C\xF3mo llegar (Google Maps)\r
          </ion-button>\r
\r
        </div>\r
\r
      </ion-content>\r
    </ng-template>\r
  </ion-modal>\r
\r
</ion-content>`, styles: ["/* src/app/tab4/tab4.page.scss */\nion-content {\n  --background: #f8f9fa;\n}\n.header-title {\n  font-weight: 700;\n  color: #333;\n}\n.location-box {\n  margin-bottom: 25px;\n}\n.location-box .loc-text {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.location-box .btn-location {\n  --border-radius: 12px;\n  --background: #3880ff;\n  --box-shadow: 0 4px 10px rgba(56, 128, 255, 0.3);\n  font-weight: 600;\n  height: 50px;\n}\n.section-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 15px;\n  padding-left: 5px;\n}\n.pharmacy-card {\n  background: white;\n  border-radius: 16px;\n  padding: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.pharmacy-card .card-img {\n  width: 60px;\n  height: 60px;\n  background: #f0f4f8;\n  border-radius: 12px;\n  padding: 10px;\n  margin-right: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pharmacy-card .card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.pharmacy-card .card-info {\n  flex: 1;\n}\n.pharmacy-card .card-info h2 {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #222;\n}\n.pharmacy-card .card-info .address {\n  margin: 0 0 6px 0;\n  font-size: 12px;\n  color: #888;\n  line-height: 1.3;\n}\n.pharmacy-card .card-info .rating-container {\n  display: flex;\n  align-items: center;\n}\n.pharmacy-card .card-info .rating-container ion-icon {\n  font-size: 12px;\n  margin-right: 1px;\n}\n.pharmacy-card .card-info .rating-container .rate-number {\n  font-size: 12px;\n  font-weight: 600;\n  color: #666;\n  margin-left: 5px;\n  background: #eee;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.pharmacy-card .card-action {\n  margin-left: 10px;\n}\n.pharmacy-card .card-action ion-button {\n  font-weight: 600;\n  --box-shadow: none;\n  font-size: 12px;\n  width: 80px;\n}\n/*# sourceMappingURL=tab4.page.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab4Page, { className: "Tab4Page", filePath: "src/app/tab4/tab4.page.ts", lineNumber: 13 });
})();
export {
  Tab4Page
};
//# sourceMappingURL=tab4.page-QP3CZJ3S.js.map
