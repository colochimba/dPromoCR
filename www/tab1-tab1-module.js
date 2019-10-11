(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"dark\">\n    <h1 padding>Recomendaciones</h1>\n    <ion-slides pager=\"false\" slidesPerView=\"1.5\" spaceBetween=\"10\">\n        <ion-slide *ngFor=\"let oferta of destacadas\">\n            <a (click)=\"presentOferta(oferta)\" routerLink=\"/oferta-detalle\">\n                <ion-card color=\"light\">\n                    <ion-card-header>\n                        <ion-img [src]=\"oferta.promoPhotoURL\"></ion-img>\n                    </ion-card-header>\n\n                    <ion-card-content>\n                        <h1>{{oferta.promoName}}</h1>\n                        <h3>{{oferta.promoDescription}}</h3>\n                    </ion-card-content>\n                </ion-card>\n            </a>\n        </ion-slide>\n    </ion-slides>\n\n    <!-- Categories -->\n    <h2 padding>Categorias</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-segment scrollable>\n                <ion-col size=\"4\" *ngFor=\"let categoria of categorias\">\n                    <ion-card (click)=\"actualizarListaPromos(categoria.categoryName)\" color=\"light\" text-center>\n                        <ion-icon size=\"large\" name={{categoria.categoryIcon}}></ion-icon>\n                        <ion-card-content>{{categoria.categoryName}}</ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-segment>\n        </ion-row>\n    </ion-grid>\n\n    <!-- List of Text Items -->\n    <h2 padding>Todas las promociones{{this.categoriaActual}}</h2>\n    <ion-list>\n        <ion-item class=\"item ios in-list ion-focusable item-label hydrated\" *ngFor=\"let oferta of ofertas\">\n            <a (click)=\"presentOferta(oferta)\" routerLink=\"/oferta-detalle\">\n                <ion-avatar slot=\"start\" class=\"ios hydrated\">\n                    <ion-img [src]='oferta.promoPhotoURL'></ion-img>\n                </ion-avatar>\n                <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated\">\n                    <h2>{{oferta.promoBusiness}}</h2>\n                    <h3>{{oferta.promoName}}</h3>\n                    <p>{{oferta.promoDescription}}</p>\n                </ion-label>\n            </a>\n        </ion-item>\n\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\nh1 {\n  padding-bottom: 0; }\n\nh2 {\n  text-transform: uppercase;\n  font-size: 16px;\n  padding-bottom: 0; }\n\nion-card-header {\n  padding: 0; }\n\nion-card-content {\n  padding-top: 10px; }\n\nion-col ion-card {\n  margin: 0;\n  padding-top: 20px; }\n\nion-icon {\n  color: #a51838; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFDSixFQUFBOztBQUVBO0VBQ0ksU0FBUztFQUNULGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgxIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDBcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuaW9uLWNvbCBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6ICNhNTE4Mzhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ofertas_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ofertas-provider.service */ "./src/app/ofertas-provider.service.ts");
/* harmony import */ var _servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/nav.service */ "./src/app/servicios/nav.service.ts");
/* harmony import */ var _json_index_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../json/index.json */ "./src/json/index.json");
var _json_index_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../json/index.json */ "./src/json/index.json", 1);





var Tab1Page = /** @class */ (function () {
    function Tab1Page(navParams, proveedor) {
        this.navParams = navParams;
        this.proveedor = proveedor;
    }
    Tab1Page.prototype.ngOnInit = function () {
        /*this.proveedor.obtenerDatos()
        .subscribe(
          (data)=> {this.ofertas = (data as any).promotions;},
          (error) => {console.log(error);}
        )*/
        this.categoriaActual = "";
        this.destacadas = _json_index_json__WEBPACK_IMPORTED_MODULE_4__.featured;
        this.categorias = _json_index_json__WEBPACK_IMPORTED_MODULE_4__.categories;
        this.ofertas = _json_index_json__WEBPACK_IMPORTED_MODULE_4__.promotions; //para trabajar con el json local
        /*//para evitar el CORS error y enviar mediante un proxy
           const proxyurl = "https://cors-anywhere.herokuapp.com/";
       const url = "https://www.dpromocr.com/json/promos.json"; // site that doesn’t send Access-Control-*
       fetch(proxyurl + url)
       .then(response => response.text())
       .then(data => {this.ofertas = JSON.parse(data);})
       .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
           */ 
    };
    Tab1Page.prototype.presentOferta = function (ofertaActual) {
        var categoria = ofertaActual.promoCategory;
        this.navParams.myParam = { "oferta": ofertaActual, "recomendaciones": this.destacadas.filter(function (oferta) { return oferta.promoCategory === categoria && oferta.promoID != ofertaActual.promoID; }) };
    };
    Tab1Page.prototype.actualizarListaPromos = function (categoria) {
        this.ofertas = _json_index_json__WEBPACK_IMPORTED_MODULE_4__.promotions;
        if (categoria != "Todos") {
            this.ofertas = this.ofertas.filter(function (oferta) { return oferta.promoCategory === categoria; });
            this.categoriaActual = " de " + categoria;
        }
        else {
            this.categoriaActual = "";
        }
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"], _ofertas_provider_service__WEBPACK_IMPORTED_MODULE_2__["OfertasProviderService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map