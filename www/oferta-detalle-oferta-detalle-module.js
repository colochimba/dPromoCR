(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oferta-detalle-oferta-detalle-module"],{

/***/ "./src/app/oferta-detalle/oferta-detalle.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/oferta-detalle/oferta-detalle.module.ts ***!
  \*********************************************************/
/*! exports provided: OfertaDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaDetallePageModule", function() { return OfertaDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _oferta_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oferta-detalle.page */ "./src/app/oferta-detalle/oferta-detalle.page.ts");







var routes = [
    {
        path: '',
        component: _oferta_detalle_page__WEBPACK_IMPORTED_MODULE_6__["OfertaDetallePage"]
    }
];
var OfertaDetallePageModule = /** @class */ (function () {
    function OfertaDetallePageModule() {
    }
    OfertaDetallePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_oferta_detalle_page__WEBPACK_IMPORTED_MODULE_6__["OfertaDetallePage"]]
        })
    ], OfertaDetallePageModule);
    return OfertaDetallePageModule;
}());



/***/ }),

/***/ "./src/app/oferta-detalle/oferta-detalle.page.html":
/*!*********************************************************!*\
  !*** ./src/app/oferta-detalle/oferta-detalle.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Detalle de la Oferta\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\" color=\"dark\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img [src]=\"ofertaDetalle.promoPhotoURL\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-card color=\"light\">\n        <h2>Detalle:</h2>\n        <p>{{ofertaDetalle.promoDescription}}</p>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <strong>Lugar: {{ofertaDetalle.promoPlace}}</strong> <br>\n                    <strong>Vence: {{ofertaDetalle.promoDate}}</strong>\n                </ion-col>\n                <ion-col>\n                    <strong>Tel: {{ofertaDetalle.promoTel}}</strong><br>\n                    <strong>Web: {{ofertaDetalle.promoWeb}}</strong>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-button color=\"medium\" expand=\"full\" (click)='presentAlertConfirm()'>Canjear Cupón</ion-button>\n    </ion-card>\n\n    <!-- List of Text Items -->\n    <ion-list>\n        <ion-item class=\"item ios in-list ion-focusable item-label hydrated\" *ngFor=\"let oferta of recomendaciones\">\n            <ion-avatar slot=\"start\" class=\"ios hydrated\">\n                <img [src]=\"oferta.promoPhotoURL\">\n            </ion-avatar>\n            <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated\">\n                <h2>{{oferta.promoBusiness}}</h2>\n                <h3>{{oferta.promoName}}</h3>\n                <p>{{oferta.promoDescription}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/oferta-detalle/oferta-detalle.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/oferta-detalle/oferta-detalle.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\nion-card-header {\n  padding: 0; }\n\nion-card-content {\n  padding-top: 10px; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 40px; }\n\nion-slides ion-card {\n  padding: 0;\n  margin: 10px 5px; }\n\nion-card {\n  padding: 10px; }\n\nion-col ion-card {\n  margin: 0; }\n\nion-icon {\n  color: #a51838; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9vZmVydGEtZGV0YWxsZS9vZmVydGEtZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUIsRUFBQTs7QUFJdkI7RUFDQSxVQUNBLEVBQUE7O0FBRUE7RUFDRSxpQkFDRixFQUFBOztBQUVBO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUksVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLFNBR0YsRUFBQTs7QUFDQTtFQUNFLGNBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29mZXJ0YS1kZXRhbGxlL29mZXJ0YS1kZXRhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG5pb24tY2FyZC1oZWFkZXIge1xucGFkZGluZzogMFxufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tcbiAgYm90dG9tOiA0MHB4XG59XG5cbmlvbi1zbGlkZXMge1xuICBpb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gIH1cbn1cblxuaW9uLWNhcmR7XG4gIHBhZGRpbmc6IDEwcHhcbn1cblxuaW9uLWNvbCAgaW9uLWNhcmR7XG4gIG1hcmdpbjogMFxuXG5cbn1cbmlvbi1pY29ue1xuICBjb2xvcjogI2E1MTgzOFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/oferta-detalle/oferta-detalle.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/oferta-detalle/oferta-detalle.page.ts ***!
  \*******************************************************/
/*! exports provided: OfertaDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaDetallePage", function() { return OfertaDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/nav.service */ "./src/app/servicios/nav.service.ts");




var OfertaDetallePage = /** @class */ (function () {
    function OfertaDetallePage(navParams, alertController) {
        this.navParams = navParams;
        this.alertController = alertController;
        this.slideOpts = {
            slidesPerView: 1.1,
            freeMode: true
        };
    }
    OfertaDetallePage.prototype.ngOnInit = function () {
        this.ofertaDetalle = this.navParams.myParam.oferta;
        this.recomendaciones = this.navParams.myParam.recomendaciones;
    };
    OfertaDetallePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Adquiere la Membresia!',
                            message: 'Para poder redemir esta promo necesita aquirir la Membresia DpromoCR',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Membresia',
                                    handler: function () {
                                        window.location.href = "/pago-membresia";
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfertaDetallePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oferta-detalle',
            template: __webpack_require__(/*! ./oferta-detalle.page.html */ "./src/app/oferta-detalle/oferta-detalle.page.html"),
            styles: [__webpack_require__(/*! ./oferta-detalle.page.scss */ "./src/app/oferta-detalle/oferta-detalle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], OfertaDetallePage);
    return OfertaDetallePage;
}());



/***/ })

}]);
//# sourceMappingURL=oferta-detalle-oferta-detalle-module.js.map