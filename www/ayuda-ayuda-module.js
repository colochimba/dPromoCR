(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ayuda-ayuda-module"],{

/***/ "./src/app/ayuda/ayuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ayuda/ayuda.module.ts ***!
  \***************************************/
/*! exports provided: AyudaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaPageModule", function() { return AyudaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ayuda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ayuda.page */ "./src/app/ayuda/ayuda.page.ts");







var routes = [
    {
        path: '',
        component: _ayuda_page__WEBPACK_IMPORTED_MODULE_6__["AyudaPage"]
    }
];
var AyudaPageModule = /** @class */ (function () {
    function AyudaPageModule() {
    }
    AyudaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ayuda_page__WEBPACK_IMPORTED_MODULE_6__["AyudaPage"]]
        })
    ], AyudaPageModule);
    return AyudaPageModule;
}());



/***/ }),

/***/ "./src/app/ayuda/ayuda.page.html":
/*!***************************************!*\
  !*** ./src/app/ayuda/ayuda.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ayuda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ayuda/ayuda.page.scss":
/*!***************************************!*\
  !*** ./src/app/ayuda/ayuda.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F5dWRhL2F5dWRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ayuda/ayuda.page.ts":
/*!*************************************!*\
  !*** ./src/app/ayuda/ayuda.page.ts ***!
  \*************************************/
/*! exports provided: AyudaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaPage", function() { return AyudaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AyudaPage = /** @class */ (function () {
    function AyudaPage() {
    }
    AyudaPage.prototype.ngOnInit = function () {
    };
    AyudaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ayuda',
            template: __webpack_require__(/*! ./ayuda.page.html */ "./src/app/ayuda/ayuda.page.html"),
            styles: [__webpack_require__(/*! ./ayuda.page.scss */ "./src/app/ayuda/ayuda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AyudaPage);
    return AyudaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ayuda-ayuda-module.js.map