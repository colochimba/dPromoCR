(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "./src/app/registro/registro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/registro/registro.page.html":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content center padding class=\"bg-image\" fullscreen=\"true\">\n\n    <ion-grid>\n        <ion-row justify-content-center class=\"ion-padding-top\">\n\n            <ion-img src=\"assets/images/logo-dpromocr.png\"></ion-img>\n\n            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                <div text-center>\n                    <h2>Registrarse</h2>\n                    <h4>Por favor ingrese los siguientes datos para crear una cuenta</h4>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <form action=\"/signup\" method=\"post\" (ngSubmit)=\"submitRegister()\">\n        <ion-item>\n\n            <ion-label position=\"floating\">Correo Electrónico</ion-label>\n            <ion-input [(ngModel)]=\"email\" name=\"email\" type=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label position=\"floating\">Contraseña</ion-label>\n            <ion-input [(ngModel)]=\"password\" name=\"password\" type=\"password\"></ion-input>\n        </ion-item>\n\n\n        <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin-top\" padding>Crear Cuenta</ion-button>\n\n    </form>\n\n</ion-content>\n\n<ion-footer padding text-center>\n\n    <a class=\"ion-margin-bottom\" routerLink=\"/ingresar\">Si ya tiene cuenta, por favor ingresar.</a>\n</ion-footer>"

/***/ }),

/***/ "./src/app/registro/registro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('app-bg.jpg') no-repeat center center / cover;\n  --color: #fff; }\n\nion-item {\n  --background: transparent !important; }\n\nion-button {\n  --background: #fff;\n  --color:#DF4A60; }\n\na, ion-input, .link, ion-label {\n  color: #fff !important;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBYTtFQUNiLGFBQVEsRUFBQTs7QUFHVjtFQUNFLG9DQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBYTtFQUNiLGVBQVEsRUFBQTs7QUFHVjtFQUNFLHNCQUFzQjtFQUN0QixxQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHAtYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6I0RGNEE2MDtcbn1cblxuYSwgaW9uLWlucHV0LCAubGluaywgaW9uLWxhYmVse1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246ICBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/registro/registro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistroPage = /** @class */ (function () {
    function RegistroPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegistroPage.prototype.ngOnInit = function () {
    };
    RegistroPage.prototype.submitRegister = function () {
        var _this = this;
        this.authService.register(this.email, this.password).then(function (res) {
            alert('Por favor valide su correo electrónico. Revise su bandeja de entrada.');
            _this.router.navigate(['']);
        }).catch(function (err) { return alert('No se pudo crear el usuario.' + err); });
    };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.page.html */ "./src/app/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=registro-registro-module.js.map