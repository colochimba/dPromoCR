(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n    <ion-toolbar color=\"dark\">\n        <ion-title>\n            Novedades\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"news-feed\" color=\"dark\">\n    <ion-card (click)=\"presentModal(noticias[0])\" mode=\"ios\" color=\"light\">\n        <ion-img [src]=\"noticias[0].promoPhotoURL\"></ion-img>\n        <ion-card-header>\n            <ion-card-subtitle>{{noticias[0].promoBusiness}}</ion-card-subtitle>\n            <ion-card-title>{{noticias[0].promoName}}</ion-card-title>\n        </ion-card-header>\n    </ion-card>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let noticia of noticias.slice(1)\">\n                <ion-card (click)=\"presentModal(noticia)\" mode=\"ios\" color=\"light\">\n                    <ion-img [src]=\"noticia.promoPhotoURL\"></ion-img>\n                    <ion-card-header>\n                        <ion-card-subtitle>{{noticia.promoBusiness}}</ion-card-subtitle>\n                        <ion-card-title>{{noticia.promoName}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  --ion-grid-padding: 5px; }\n\nion-grid ion-card {\n  margin: 0; }\n\na {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29se1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDVweDtcbn1cblxuaW9uLWdyaWQgaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbn1cblxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _noticia_noticia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../noticia/noticia.page */ "./src/app/noticia/noticia.page.ts");
/* harmony import */ var _ofertas_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ofertas-provider.service */ "./src/app/ofertas-provider.service.ts");
/* harmony import */ var _json_index_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../json/index.json */ "./src/json/index.json");
var _json_index_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../json/index.json */ "./src/json/index.json", 1);






var Tab2Page = /** @class */ (function () {
    function Tab2Page(modalController, proveedor) {
        this.modalController = modalController;
        this.proveedor = proveedor;
    }
    Tab2Page.prototype.ngOnInit = function () {
        /*this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.noticias = (data as any).news;},
         (error) => {console.log(error);}
       )*/
        this.noticias = _json_index_json__WEBPACK_IMPORTED_MODULE_5__.news; //para acceder al json local
    };
    Tab2Page.prototype.presentModal = function (noticia) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _noticia_noticia_page__WEBPACK_IMPORTED_MODULE_3__["NoticiaPage"],
                            componentProps: {
                                'promoName': noticia.promoName,
                                'promoBusiness': noticia.promoBusiness,
                                'promoPhotoURL': noticia.promoPhotoURL,
                                'promoDescription': noticia.promoDescription
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ofertas_provider_service__WEBPACK_IMPORTED_MODULE_4__["OfertasProviderService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map