(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>\n            Configuración\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"settings-page\" color=\"dark\">\n\n    <!-- <ion-list-header>\n        <ion-avatar clear block>\n            <img src=\"assets/images/avatar-user.png\">\n        </ion-avatar>\n\n    </ion-list-header> -->\n\n    <div text-wrap text-center class=\"username\">{{this.authservice.currentUser.name}} {{this.authservice.currentUser.lastname}}</div>\n\n    <ion-list lines=\"none\">\n        <ion-item detail color=\"dark\" routerLink=\"/perfil\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\n            <ion-label>Mi Perfil</ion-label>\n        </ion-item>\n        <ion-item detail color=\"dark\" routerLink=\"/mispromos\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"pricetag\"></ion-icon>\n            <ion-label>Mis Promos</ion-label>\n        </ion-item>\n        <ion-item href=\"#\" detail color=\"dark\" routerLink=\"/pago-membresia\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"card\"></ion-icon>\n            <ion-label>Método de pago</ion-label>\n        </ion-item>\n        <ion-item href=\"#\" detail color=\"dark\" routerLink=\"/ayuda\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"help\"></ion-icon>\n            <ion-label>Ayuda</ion-label>\n        </ion-item>\n        <ion-item href=\"#\" detail color=\"dark\" routerLink=\"/politicas-privacidad\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"help\"></ion-icon>\n            <ion-label>Políticas de privacidad</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer color=\"dark\">\n    <ion-grid fixed color=\"dark\">\n        <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n                <ion-button (click)=\"logout()\" shape=\"round\" mode=\"md\" size=\"small\" expand=\"full\" color=\"light\" class=\"ion-color ion-color-light ios button button-large button-solid ion-activatable ion-focusable hydrated\">Cerrar Sesión</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer, ion-grid, ion-row, ion-col {\n  --ion-background-color: #1e2023 !important;\n  background-color: #1e2023 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQXVCO0VBQ3ZCLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIsIGlvbi1ncmlkLCBpb24tcm93LCBpb24tY29se1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDIzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMjMgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Tab3Page = /** @class */ (function () {
    function Tab3Page(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    Tab3Page.prototype.ngOnInit = function () {
    };
    Tab3Page.prototype.logout = function () {
        var _this = this;
        this.authservice.logoutUser().then(function () {
            _this.router.navigate(['/ingresar']);
        }).catch(function (error) {
            alert("Error inesperado");
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map