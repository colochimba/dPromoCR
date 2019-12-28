(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mispromos-mispromos-module"],{

/***/ "./src/app/mispromos/mispromos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mispromos/mispromos.module.ts ***!
  \***********************************************/
/*! exports provided: MispromosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MispromosPageModule", function() { return MispromosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mispromos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mispromos.page */ "./src/app/mispromos/mispromos.page.ts");







var routes = [
    {
        path: '',
        component: _mispromos_page__WEBPACK_IMPORTED_MODULE_6__["MispromosPage"]
    }
];
var MispromosPageModule = /** @class */ (function () {
    function MispromosPageModule() {
    }
    MispromosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mispromos_page__WEBPACK_IMPORTED_MODULE_6__["MispromosPage"]]
        })
    ], MispromosPageModule);
    return MispromosPageModule;
}());



/***/ }),

/***/ "./src/app/mispromos/mispromos.page.html":
/*!***********************************************!*\
  !*** ./src/app/mispromos/mispromos.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Ver Promociones Usadas\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"\" color=\"dark\">\n    <ion-card mode=\"ios\" color=\"light\" *ngFor=\"let promo of this.authService.currentUser.mispromos\">\n        <ion-card-header>\n            <ion-card-subtitle>{{promo.business}}</ion-card-subtitle>\n            <ion-card-title>{{promo.name}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-avatar slot=\"start\" class=\"ios hydrated\">\n                <ion-img [src]='promo.photo'></ion-img>\n            </ion-avatar>\n            {{promo.description}}<br>Canjeada el: {{promo.date}}\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/mispromos/mispromos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mispromos/mispromos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  padding: 0; }\n\nion-card-content {\n  padding-top: 10px; }\n\nion-card {\n  padding: 10px; }\n\nion-col ion-card {\n  margin: 0; }\n\nion-avatar {\n  float: left;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9taXNwcm9tb3MvbWlzcHJvbW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQ0osRUFBQTs7QUFFQTtFQUNJLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxTQUNKLEVBQUE7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9taXNwcm9tb3MvbWlzcHJvbW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMFxufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweFxufVxuXG5pb24tY2FyZCB7XG4gICAgcGFkZGluZzogMTBweFxufVxuXG5pb24tY29sIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDBcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mispromos/mispromos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mispromos/mispromos.page.ts ***!
  \*********************************************/
/*! exports provided: MispromosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MispromosPage", function() { return MispromosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/nav.service */ "./src/app/servicios/nav.service.ts");




var MispromosPage = /** @class */ (function () {
    function MispromosPage(authService, navParams) {
        this.authService = authService;
        this.navParams = navParams;
        this.mispromos = new Array();
    }
    MispromosPage.prototype.ngOnInit = function () {
    };
    MispromosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mispromos',
            template: __webpack_require__(/*! ./mispromos.page.html */ "./src/app/mispromos/mispromos.page.html"),
            styles: [__webpack_require__(/*! ./mispromos.page.scss */ "./src/app/mispromos/mispromos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]])
    ], MispromosPage);
    return MispromosPage;
}());



/***/ })

}]);
//# sourceMappingURL=mispromos-mispromos-module.js.map