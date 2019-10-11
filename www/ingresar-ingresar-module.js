(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingresar-ingresar-module"],{

/***/ "./src/app/ingresar/ingresar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ingresar/ingresar.module.ts ***!
  \*********************************************/
/*! exports provided: IngresarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPageModule", function() { return IngresarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ingresar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingresar.page */ "./src/app/ingresar/ingresar.page.ts");







var routes = [
    {
        path: '',
        component: _ingresar_page__WEBPACK_IMPORTED_MODULE_6__["IngresarPage"]
    }
];
var IngresarPageModule = /** @class */ (function () {
    function IngresarPageModule() {
    }
    IngresarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ingresar_page__WEBPACK_IMPORTED_MODULE_6__["IngresarPage"]]
        })
    ], IngresarPageModule);
    return IngresarPageModule;
}());



/***/ }),

/***/ "./src/app/ingresar/ingresar.page.html":
/*!*********************************************!*\
  !*** ./src/app/ingresar/ingresar.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content center padding class=\"bg-image\" fullscreen=\"true\">\n\n  <ion-img src=\"assets/images/logo-dpromocr.png\"></ion-img>\n  <div text-center>\n    <h2>Ingresar</h2>\n    <h4>Bienvenido de nuevo, por favor ingrese para continuar</h4>\n  </div>\n\n  <ion-item>\n\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input [(ngModel)]=\"email\" type=\"email\" name=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input [(ngModel)]=\"password\" type=\"password\" name=\"password\"></ion-input>\n  </ion-item>\n\n  <ion-button (click)=\"OnSubmitLogin()\" expand=\"block\" class=\"ion-margin-top\" padding>Ingresar</ion-button>\n\n</ion-content>\n\n<ion-footer padding text-center>\n  <a class=\"link\" routerLink=\"/registro\">Registrar una nueva cuenta nueva</a>\n</ion-footer>"

/***/ }),

/***/ "./src/app/ingresar/ingresar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ingresar/ingresar.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('app-bg.jpg') no-repeat center center / cover;\n  --color: #fff; }\n\nion-item {\n  --background: transparent !important; }\n\nion-button {\n  --background: #fff;\n  --color:#DF4A60; }\n\na, ion-input, .link, ion-label {\n  --color: #fff !important;\n  color: #fff !important;\n  text-decoration: none; }\n\nion-item {\n  --border-color: #fff\n; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9pbmdyZXNhci9pbmdyZXNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBYTtFQUNiLGFBQVEsRUFBQTs7QUFHVjtFQUNFLG9DQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBYTtFQUNiLGVBQVEsRUFBQTs7QUFHVjtFQUNFLHdCQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLHFCQUFzQixFQUFBOztBQUl2QjtFQUNDO0FBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZ3Jlc2FyL2luZ3Jlc2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHAtYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6I0RGNEE2MDtcbn1cblxuYSwgaW9uLWlucHV0LCAubGluaywgaW9uLWxhYmVse1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogIG5vbmU7XG59XG5cblxuIGlvbi1pdGVte1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZlxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ingresar/ingresar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ingresar/ingresar.page.ts ***!
  \*******************************************/
/*! exports provided: IngresarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPage", function() { return IngresarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IngresarPage = /** @class */ (function () {
    function IngresarPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IngresarPage.prototype.ngOnInit = function () {
    };
    IngresarPage.prototype.OnSubmitLogin = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function (res) {
            _this.router.navigate(['']);
        }).catch(function (err) { return alert('los datos son incorrectos o no existe el usuario'); });
    };
    IngresarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingresar',
            template: __webpack_require__(/*! ./ingresar.page.html */ "./src/app/ingresar/ingresar.page.html"),
            styles: [__webpack_require__(/*! ./ingresar.page.scss */ "./src/app/ingresar/ingresar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IngresarPage);
    return IngresarPage;
}());



/***/ })

}]);
//# sourceMappingURL=ingresar-ingresar-module.js.map