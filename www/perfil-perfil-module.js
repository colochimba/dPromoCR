(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.html":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content center padding class=\"bg-image\" fullscreen=\"true\">\n\n    <ion-img src=\"assets/images/logo-dpromocr.png\"></ion-img>\n    <div text-center>\n        <h2>Mi Perfil</h2>\n    </div>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"this.authservice.currentUser.name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Apellidos</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"this.authservice.currentUser.lastname\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Sexo</ion-label>\n        <ion-select [(ngModel)]=\"this.authservice.currentUser.gender\" interface=\"popover\">\n            <ion-select-option value=\"femenino\">Femenino</ion-select-option>\n            <ion-select-option value=\"masculino\">Masculino</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Fecha de nacimiento</ion-label>\n        <ion-datetime [(ngModel)]=\"this.authservice.currentUser.birthdate\" displayFormat=\"DD MMM YY\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Tipo de Identificación</ion-label>\n        <ion-select [(ngModel)]=\"this.authservice.currentUser.idtype\" interface=\"popover\">\n            <ion-select-option value=\"cedula\">Cédula</ion-select-option>\n            <ion-select-option value=\"pasaporte\">Pasaporte</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">Número de identificación</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"this.authservice.currentUser.idnumber\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">Usuario de paypal</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"this.authservice.currentUser.paypalid\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" class=\"ion-margin-top\" padding (click)=\"updateUser()\">Actualizar</ion-button>\n    <ion-button expand=\"block\" class=\"ion-margin-top\" padding routerLink=\"/\">Regresar</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('app-bg.jpg') no-repeat center center / cover;\n  --color: #fff; }\n\nion-item {\n  --background: transparent !important; }\n\nion-button {\n  --background: #fff;\n  --color: #DF4A60; }\n\na,\nion-input,\n.link,\nion-label {\n  --color: #fff !important;\n  color: #fff !important;\n  text-decoration: none; }\n\nion-select {\n  color: #fff; }\n\nion-datetime {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtEQUFhO0VBQ2IsYUFBUSxFQUFBOztBQUdaO0VBQ0ksb0NBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBYTtFQUNiLGdCQUFRLEVBQUE7O0FBR1o7Ozs7RUFJSSx3QkFBUTtFQUNSLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHAtYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1jb2xvcjogI0RGNEE2MDtcbn1cblxuYSxcbmlvbi1pbnB1dCxcbi5saW5rLFxuaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");




var PerfilPage = /** @class */ (function () {
    function PerfilPage(authservice, toastController) {
        this.authservice = authservice;
        this.toastController = toastController;
    }
    PerfilPage.prototype.ngOnInit = function () {
    };
    //before this method we should validate the fields needed.
    PerfilPage.prototype.updateUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authservice.updateUserInDB();
                        return [4 /*yield*/, this.toastController.create({
                                color: 'dark',
                                message: 'Información de perfil actualizada.',
                                duration: 3000,
                                showCloseButton: true
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.page.html */ "./src/app/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map