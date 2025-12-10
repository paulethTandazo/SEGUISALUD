import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "./chunk-QB3KDYO4.js";
import {
  add,
  addIcons,
  alertCircleOutline,
  appsOutline,
  calendarOutline,
  documentAttachOutline,
  documentTextOutline,
  ellipse,
  happyOutline,
  heartCircle,
  homeOutline,
  map,
  medkit,
  medkitOutline,
  navigateCircleOutline,
  personOutline,
  removeCircleOutline,
  sadOutline,
  square,
  star,
  starOutline,
  waterOutline
} from "./chunk-QMCNGXYK.js";
import {
  Component,
  EnvironmentInjector,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-MGUVMOPK.js";
import "./chunk-IR3FBXUC.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-TIUM25T7.js";
import "./chunk-ZPKSTMPW.js";
import "./chunk-ZFKWIOFV.js";
import "./chunk-MRWMO467.js";
import "./chunk-KKMPNYSZ.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-UL2P3LPA.js";

// src/app/tabs/tabs.page.ts
var _TabsPage = class _TabsPage {
  constructor() {
    this.environmentInjector = inject(EnvironmentInjector);
    addIcons({
      homeOutline,
      calendarOutline,
      map,
      medkit,
      heartCircle,
      personOutline,
      ellipse,
      square,
      medkitOutline,
      navigateCircleOutline,
      star,
      appsOutline,
      add,
      removeCircleOutline,
      sadOutline,
      alertCircleOutline,
      happyOutline,
      starOutline,
      waterOutline,
      documentTextOutline,
      documentAttachOutline
    });
  }
};
_TabsPage.\u0275fac = function TabsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPage)();
};
_TabsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsPage, selectors: [["app-tabs"]], decls: 26, vars: 0, consts: [["slot", "bottom"], ["tab", "tab1", "href", "/tabs/tab1"], ["aria-hidden", "true", "name", "home-outline"], ["tab", "tab2", "href", "/tabs/tab2"], ["aria-hidden", "true", "name", "calendar-outline"], ["tab", "tab4", "href", "/tabs/tab4"], ["aria-hidden", "true", "name", "map"], ["tab", "tab5", "href", "/tabs/tab5"], ["aria-hidden", "true", "name", "medkit"], ["tab", "tab6", "href", "/tabs/tab6"], ["aria-hidden", "true", "name", "heart-circle"], ["tab", "tab3", "href", "/tabs/tab3"], ["aria-hidden", "true", "name", "person-outline"]], template: function TabsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
    \u0275\u0275element(3, "ion-icon", 2);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5, "Inicio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-tab-button", 3);
    \u0275\u0275element(7, "ion-icon", 4);
    \u0275\u0275elementStart(8, "ion-label");
    \u0275\u0275text(9, "Agenda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-tab-button", 5);
    \u0275\u0275element(11, "ion-icon", 6);
    \u0275\u0275elementStart(12, "ion-label");
    \u0275\u0275text(13, "Farmacias");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-tab-button", 7);
    \u0275\u0275element(15, "ion-icon", 8);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17, "Botiqu\xEDn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-tab-button", 9);
    \u0275\u0275element(19, "ion-icon", 10);
    \u0275\u0275elementStart(20, "ion-label");
    \u0275\u0275text(21, "Bienestar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-tab-button", 11);
    \u0275\u0275element(23, "ion-icon", 12);
    \u0275\u0275elementStart(24, "ion-label");
    \u0275\u0275text(25, "Perfil");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel], encapsulation: 2 });
var TabsPage = _TabsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsPage, [{
    type: Component,
    args: [{ selector: "app-tabs", standalone: true, imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel], template: '<ion-tabs>\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="tab1" href="/tabs/tab1">\n      <ion-icon aria-hidden="true" name="home-outline"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="tab2" href="/tabs/tab2">\n      <ion-icon aria-hidden="true" name="calendar-outline"></ion-icon>\n      <ion-label>Agenda</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="tab4" href="/tabs/tab4">\n      <ion-icon aria-hidden="true" name="map"></ion-icon>\n      <ion-label>Farmacias</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab="tab5" href="/tabs/tab5">\n      <ion-icon aria-hidden="true" name="medkit"></ion-icon>\n      <ion-label>Botiqu\xEDn</ion-label>\n    </ion-tab-button>    \n    <ion-tab-button tab="tab6" href="/tabs/tab6">\n      <ion-icon aria-hidden="true" name="heart-circle"></ion-icon>\n      <ion-label>Bienestar</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab="tab3" href="/tabs/tab3">\n      <ion-icon aria-hidden="true" name="person-outline"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsPage, { className: "TabsPage", filePath: "src/app/tabs/tabs.page.ts", lineNumber: 33 });
})();

// src/app/tabs/tabs.routes.ts
var routes = [
  {
    path: "",
    // <--- CAMBIO IMPORTANTE: Déjalo vacío
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadComponent: () => import("./tab1.page-62KATR3J.js").then((m) => m.Tab1Page)
      },
      {
        path: "tab2",
        loadComponent: () => import("./tab2.page-ADQKCOIW.js").then((m) => m.Tab2Page)
      },
      {
        path: "tab3",
        loadComponent: () => import("./tab3.page-E4GHH4GT.js").then((m) => m.Tab3Page)
      },
      {
        path: "tab4",
        loadComponent: () => import("./tab4.page-QP3CZJ3S.js").then((m) => m.Tab4Page)
      },
      {
        path: "tab5",
        loadComponent: () => import("./tab5.page-X4TZ6UYR.js").then((m) => m.Tab5Page)
      },
      {
        path: "tab6",
        loadComponent: () => import("./tab6.page-RVB4UPSP.js").then((m) => m.Tab6Page)
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full"
  }
];
export {
  routes
};
//# sourceMappingURL=tabs.routes-RZ2DDJIK.js.map
