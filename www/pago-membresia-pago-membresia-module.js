(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pago-membresia-pago-membresia-module"],{

/***/ "./src/app/pago-membresia/pago-membresia.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pago-membresia/pago-membresia.module.ts ***!
  \*********************************************************/
/*! exports provided: PagoMembresiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoMembresiaPageModule", function() { return PagoMembresiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pago_membresia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pago-membresia.page */ "./src/app/pago-membresia/pago-membresia.page.ts");







var routes = [
    {
        path: '',
        component: _pago_membresia_page__WEBPACK_IMPORTED_MODULE_6__["PagoMembresiaPage"]
    }
];
var PagoMembresiaPageModule = /** @class */ (function () {
    function PagoMembresiaPageModule() {
    }
    PagoMembresiaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pago_membresia_page__WEBPACK_IMPORTED_MODULE_6__["PagoMembresiaPage"]]
        })
    ], PagoMembresiaPageModule);
    return PagoMembresiaPageModule;
}());



/***/ }),

/***/ "./src/app/pago-membresia/pago-membresia.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pago-membresia/pago-membresia.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content center padding class=\"bg-image\" fullscreen=\"true\">\n\n    <ion-img src=\"assets/images/logo-dpromocr.png\"></ion-img>\n    <div text-center>\n        <h2>Agregar Metodo de Pago</h2>\n    </div>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Numero de tarjeta</ion-label>\n        <ion-input type=\"number\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Vence</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">CVV</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Guardar Tarjeta</ion-label>\n        <ion-checkbox slot=\"end\" checked=\"true\"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-button expand=\"block\" class=\"ion-margin-top\" padding>Pagar</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pago-membresia/pago-membresia.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pago-membresia/pago-membresia.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('app-bg.jpg') no-repeat center center / cover;\n  --color: #fff; }\n\nion-item {\n  --background: transparent !important; }\n\nion-button {\n  --background: #fff;\n  --color:#DF4A60; }\n\na, ion-input, .link, ion-label {\n  --color: #fff !important;\n  color: #fff !important;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9wYWdvLW1lbWJyZXNpYS9wYWdvLW1lbWJyZXNpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBYTtFQUNiLGFBQVEsRUFBQTs7QUFHVjtFQUNFLG9DQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBYTtFQUNiLGVBQVEsRUFBQTs7QUFHVjtFQUNFLHdCQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLHFCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnby1tZW1icmVzaWEvcGFnby1tZW1icmVzaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2FwcC1iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jb2xvcjojREY0QTYwO1xufVxuXG5hLCBpb24taW5wdXQsIC5saW5rLCBpb24tbGFiZWx7XG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiAgbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pago-membresia/pago-membresia.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pago-membresia/pago-membresia.page.ts ***!
  \*******************************************************/
/*! exports provided: PagoMembresiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoMembresiaPage", function() { return PagoMembresiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");



var PagoMembresiaPage = /** @class */ (function () {
    function PagoMembresiaPage(authService) {
        this.authService = authService;
    }
    PagoMembresiaPage.prototype.ngOnInit = function () {
        this.currentUser = this.authService.currentUser;
    };
    PagoMembresiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pago-membresia',
            template: __webpack_require__(/*! ./pago-membresia.page.html */ "./src/app/pago-membresia/pago-membresia.page.html"),
            styles: [__webpack_require__(/*! ./pago-membresia.page.scss */ "./src/app/pago-membresia/pago-membresia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PagoMembresiaPage);
    return PagoMembresiaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pago-membresia-pago-membresia-module.js.map