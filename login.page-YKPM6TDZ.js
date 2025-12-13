import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonText,
  IonicModule,
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
  eyeOutline,
  lockClosedOutline,
  logoApple,
  logoGoogle,
  mailOutline
} from "./chunk-BAK4QGVB.js";
import {
  CommonModule,
  Component,
  FormsModule,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
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

// src/app/login/login.page.ts
var _LoginPage = class _LoginPage {
  constructor(router) {
    this.router = router;
    this.email = "";
    this.password = "";
    addIcons({
      logoGoogle,
      logoApple,
      mailOutline,
      lockClosedOutline,
      eyeOutline
    });
  }
  ingresar() {
    console.log("Ingresando directo...");
    this.router.navigate(["/tabs/tab1"]);
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(Router));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 34, vars: 1, consts: [[1, "ion-padding", "ion-text-center", 3, "fullscreen"], [1, "login-wrapper"], ["src", "https://i.postimg.cc/rFBg1f82/Logo-Principal.png", "alt", "Logo SEGUISALUD", "width", "100", "height", "100", 1, "logo-img"], [1, "main-title"], [1, "input-group"], ["color", "medium", 1, "input-label"], ["lines", "none", 1, "rounded-input"], ["slot", "start", "name", "mail-outline", "color", "medium"], ["type", "email", "placeholder", "Ingrese su correo electr\xF3nico"], ["slot", "start", "name", "lock-closed-outline", "color", "medium"], ["type", "password", "placeholder", "Ingrese su contrase\xF1a"], ["slot", "end", "name", "eye-outline", 1, "eye-icon"], ["expand", "block", 1, "login-btn", 3, "click"], [1, "separator"], [1, "line"], ["expand", "block", "fill", "outline", 1, "social-btn"], ["slot", "start", "name", "logo-google"], ["slot", "start", "name", "logo-apple"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "h1", 3);
    \u0275\u0275text(4, "SEGUISALUD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "ion-text", 5);
    \u0275\u0275text(7, "Correo El\xE9ctronico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-item", 6);
    \u0275\u0275element(9, "ion-icon", 7)(10, "ion-input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "br")(12, "br");
    \u0275\u0275elementStart(13, "div", 4)(14, "ion-text", 5);
    \u0275\u0275text(15, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-item", 6);
    \u0275\u0275element(17, "ion-icon", 9)(18, "ion-input", 10)(19, "ion-icon", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "br");
    \u0275\u0275elementStart(21, "ion-button", 12);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_21_listener() {
      return ctx.ingresar();
    });
    \u0275\u0275text(22, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275element(24, "div", 14);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Or");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-button", 15);
    \u0275\u0275element(29, "ion-icon", 16);
    \u0275\u0275text(30, " Continue with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ion-button", 15);
    \u0275\u0275element(32, "ion-icon", 17);
    \u0275\u0275text(33, " Continue with Apple ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonIcon, IonInput, IonItem, IonText, TextValueAccessorDirective, CommonModule, FormsModule], styles: ['@charset "UTF-8";\n\n\n\n.login-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.input-group[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 10px;\n}\n.input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin-left: 5px;\n}\n.main-title[_ngcontent-%COMP%] {\n  font-family: "Open Sans", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 700;\n  font-style: normal;\n  font-variation-settings: "wdth" 100;\n  color: #00618e;\n  font-size: 28px;\n  letter-spacing: 1.5px;\n  margin-top: 0;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n}\n.logo-img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 30px auto;\n  border-radius: 10px;\n}\n.rounded-input[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 25px;\n  --padding-start: 10px;\n  border: 1px solid #e0e0e0;\n  box-shadow: none;\n}\n.login-btn[_ngcontent-%COMP%] {\n  --background: #00618e;\n  --border-radius: 50px;\n  --color: white;\n  height: 55px;\n  font-weight: bold;\n  font-size: 1.1rem;\n  text-transform: none;\n  margin-top: 10px;\n}\n.separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n.separator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e0e0e0;\n  flex: 1;\n}\n.separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.social-btn[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n  --border-color: #e0e0e0;\n  --color: #00618e;\n  --border-width: 1px;\n  height: 55px;\n  font-weight: 500;\n  text-transform: none;\n  margin-bottom: 10px;\n}\n.social-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=login.page.css.map */'] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: '<ion-content [fullscreen]="true" class="ion-padding ion-text-center">\r\n\r\n  <div class="login-wrapper">\r\n    \r\n    <img src="https://i.postimg.cc/rFBg1f82/Logo-Principal.png" class="logo-img" alt="Logo SEGUISALUD" width="100" height="100">\r\n    <h1 class="main-title">SEGUISALUD</h1>\r\n    <div class="input-group">\r\n      <ion-text color="medium" class="input-label">Correo El\xE9ctronico</ion-text>\r\n      <ion-item lines="none" class="rounded-input">\r\n        <ion-icon slot="start" name="mail-outline" color="medium"></ion-icon>\r\n        <ion-input type="email" placeholder="Ingrese su correo electr\xF3nico"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <br>\r\n    <br>\r\n\r\n    <div class="input-group">\r\n      <ion-text color="medium" class="input-label">Contrase\xF1a</ion-text>\r\n      <ion-item lines="none" class="rounded-input">\r\n        <ion-icon slot="start" name="lock-closed-outline" color="medium"></ion-icon>\r\n        <ion-input type="password" placeholder="Ingrese su contrase\xF1a"></ion-input>\r\n        <ion-icon slot="end" name="eye-outline" class="eye-icon"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <ion-button expand="block" class="login-btn" (click)="ingresar()">\r\n      Login\r\n    </ion-button>\r\n\r\n    <div class="separator">\r\n      <div class="line"></div>\r\n      <span>Or</span>\r\n      <div class="line"></div>\r\n    </div>\r\n\r\n    <ion-button expand="block" fill="outline" class="social-btn">\r\n      <ion-icon slot="start" name="logo-google"></ion-icon>\r\n      Continue with Google\r\n    </ion-button>\r\n\r\n    <ion-button expand="block" fill="outline" class="social-btn">\r\n      <ion-icon slot="start" name="logo-apple"></ion-icon>\r\n      Continue with Apple\r\n    </ion-button>\r\n\r\n  </div>\r\n</ion-content>', styles: ['@charset "UTF-8";\n\n/* src/app/login/login.page.scss */\n.login-wrapper {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.input-group {\n  text-align: left;\n  margin-bottom: 10px;\n}\n.input-group .input-label {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin-left: 5px;\n}\n.main-title {\n  font-family: "Open Sans", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 700;\n  font-style: normal;\n  font-variation-settings: "wdth" 100;\n  color: #00618e;\n  font-size: 28px;\n  letter-spacing: 1.5px;\n  margin-top: 0;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n}\n.logo-img {\n  display: block;\n  margin: 0 auto 30px auto;\n  border-radius: 10px;\n}\n.rounded-input {\n  --background: #ffffff;\n  --border-radius: 25px;\n  --padding-start: 10px;\n  border: 1px solid #e0e0e0;\n  box-shadow: none;\n}\n.login-btn {\n  --background: #00618e;\n  --border-radius: 50px;\n  --color: white;\n  height: 55px;\n  font-weight: bold;\n  font-size: 1.1rem;\n  text-transform: none;\n  margin-top: 10px;\n}\n.separator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n.separator .line {\n  height: 1px;\n  background: #e0e0e0;\n  flex: 1;\n}\n.separator span {\n  padding: 0 10px;\n}\n.social-btn {\n  --border-radius: 50px;\n  --border-color: #e0e0e0;\n  --color: #00618e;\n  --border-width: 1px;\n  height: 55px;\n  font-weight: 500;\n  text-transform: none;\n  margin-bottom: 10px;\n}\n.social-btn ion-icon {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/login/login.page.ts", lineNumber: 24 });
})();
export {
  LoginPage
};
//# sourceMappingURL=login.page-YKPM6TDZ.js.map
