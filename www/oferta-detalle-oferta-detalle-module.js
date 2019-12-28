(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oferta-detalle-oferta-detalle-module"],{

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

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

module.exports = "<ion-header translucent>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Detalle de la Oferta\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\" color=\"dark\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img [src]=\"ofertaDetalle.promoPhotoURL\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"light\">\n                <ion-card-header>\n                    <ion-img src=\"https://via.placeholder.com/450x250\"></ion-img>\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-card color=\"light\">\n        <h2>Detalle:</h2>\n        <p>{{ofertaDetalle.promoDescription}}</p>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <strong>Lugar: {{ofertaDetalle.promoPlace}}</strong> <br>\n                    <strong>Vence: {{ofertaDetalle.promoDate}}</strong>\n                </ion-col>\n                <ion-col>\n                    <strong>Tel: {{ofertaDetalle.promoTel}}</strong><br>\n                    <strong>Web: {{ofertaDetalle.promoWeb}}</strong>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ng-template [ngIf]=\"this.authService.currentUser.active && this.unusedPromo(ofertaDetalle.promoID)\" [ngIfElse]=\"deactive\">\n            <ion-button color='primary' expand=\"full\" (click)=\"canjearCupon()\">Canjear Cupón</ion-button>\n        </ng-template>\n        <ng-template #deactive>\n            <ion-button color='medium' expand=\"full\" (click)='presentAlertConfirm()'>Canjear Cupón</ion-button>\n        </ng-template>\n\n    </ion-card>\n    <!-- Loagind bar Deberiamos tambien deshabilitar el resto de la pantalla mientras esta esperando....-->\n    <ng-container *ngIf=\"this.waiting\">\n        <ion-list-header>\n            <ion-label id=\"loadingLabel\">\n                Esperando\n            </ion-label>\n            <ion-spinner name=\"bubbles\"></ion-spinner>\n        </ion-list-header>\n    </ng-container>\n    <!-- List of Text Items -->\n    <ion-list>\n        <ion-item class=\"item ios in-list ion-focusable item-label hydrated\" *ngFor=\"let oferta of recomendaciones\">\n            <a (click)=\"presentOferta(oferta)\" routerLink=\"/oferta-detalle\">\n                <ion-avatar slot=\"start\" class=\"ios hydrated\">\n                    <img [src]=\"oferta.promoPhotoURL\">\n                </ion-avatar>\n                <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated\">\n                    <h2>{{oferta.promoBusiness}}</h2>\n                    <h3>{{oferta.promoName}}</h3>\n                    <p>{{oferta.promoDescription}}</p>\n                </ion-label>\n            </a>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/oferta-detalle/oferta-detalle.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/oferta-detalle/oferta-detalle.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\nion-card-header {\n  padding: 0; }\n\nion-card-content {\n  padding-top: 10px; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 40px; }\n\nion-slides ion-card {\n  padding: 0;\n  margin: 10px 5px; }\n\nion-card {\n  padding: 10px; }\n\nion-col ion-card {\n  margin: 0; }\n\nion-icon {\n  color: #a51838; }\n\nion-label {\n  color: black !important;\n  white-space: normal !important; }\n\nion-avatar {\n  float: left;\n  margin-right: 10px; }\n\nion-list-header {\n  background-color: lightgray; }\n\nion-list-header ion-label {\n    margin-left: auto; }\n\nion-list-header ion-spinner {\n    margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9hcmNlL0Rlc2t0b3AvTXlQcm9qZWN0cy9kUHJvbW9DUi1tYXN0ZXIvc3JjL2FwcC9vZmVydGEtZGV0YWxsZS9vZmVydGEtZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxVQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFDSixFQUFBOztBQUVBO0VBQ0ksWUFDSixFQUFBOztBQUVBO0VBRVEsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLFNBQ0osRUFBQTs7QUFFQTtFQUNJLGNBQ0osRUFBQTs7QUFFQTtFQUNJLHVCQUF1QjtFQUN2Qiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRC9CO0lBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO0lBTVEsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vZmVydGEtZGV0YWxsZS9vZmVydGEtZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMFxufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweFxufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICBib3R0b206IDQwcHhcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDEwcHggNXB4O1xuICAgIH1cbn1cblxuaW9uLWNhcmQge1xuICAgIHBhZGRpbmc6IDEwcHhcbn1cblxuaW9uLWNvbCBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwXG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI2E1MTgzOFxufVxuXG5pb24tbGFiZWwge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _servicios_comm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/comm.service */ "./src/app/servicios/comm.service.ts");






var OfertaDetallePage = /** @class */ (function () {
    function OfertaDetallePage(navParams, authService, commService, alertController) {
        this.navParams = navParams;
        this.authService = authService;
        this.commService = commService;
        this.alertController = alertController;
        this.waiting = false;
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
                            header: 'Adquiere la Membresía!',
                            message: 'La Promo ya fue utilizada o necesita aquirir la Membresía DpromoCR',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Membresía',
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
    OfertaDetallePage.prototype.presentOferta = function (ofertaActual) {
        var categoria = ofertaActual.promoCategory;
        this.ofertaDetalle = ofertaActual;
        this.recomendaciones = this.navParams.destacadas.filter(function (oferta) { return oferta.promoCategory === categoria && oferta.promoID != ofertaActual.promoID; });
    };
    //Este método debe enviar la notificación al negocio para aceptar el cupón.
    //El negocio debe responder
    //Si el cupon se va a canjear debe realizar lo siguiente
    OfertaDetallePage.prototype.canjearCupon = function () {
        var _this = this;
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + ' ' + time;
        this.commService.sendMessage(this.ofertaDetalle.promoBusiness, this.ofertaDetalle.promoName, this.ofertaDetalle.promoDescription);
        this.waiting = true;
        this.get().then(function () {
            alert("Promoción aplicada correctamente!");
            _this.waiting = false;
            _this.authService.currentUser.mispromos.push({ "promoID": _this.ofertaDetalle.promoID,
                "date": dateTime,
                "name": _this.ofertaDetalle.promoName,
                "business": _this.ofertaDetalle.promoBusiness,
                "photo": _this.ofertaDetalle.promoPhotoURL,
                "description": _this.ofertaDetalle.promoDescription });
            //update the user in DB
        }).catch(function (err) { alert("Lo sentimos la promoción no aplica."); _this.waiting = false; });
    };
    //true si la promo no ha sido usada (guardada en mis promos)
    //false si la promo ya fue usada y esta guardada en mis promos
    OfertaDetallePage.prototype.unusedPromo = function (id) {
        for (var i = 0; i < this.authService.currentUser.mispromos.length; i++) {
            if (this.authService.currentUser.mispromos[i].promoID == id) {
                return false;
            }
        }
        return true;
    };
    OfertaDetallePage.prototype.get = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commService.getMessages(this.ofertaDetalle.promoBusiness)];
                    case 1:
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _servicios_comm_service__WEBPACK_IMPORTED_MODULE_5__["CommService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], OfertaDetallePage);
    return OfertaDetallePage;
}());



/***/ }),

/***/ "./src/app/servicios/comm.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/comm.service.ts ***!
  \*******************************************/
/*! exports provided: CommService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommService", function() { return CommService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/servicios/auth.service.ts");





var CommService = /** @class */ (function () {
    function CommService(authService, Afirebase) {
        this.authService = authService;
        this.Afirebase = Afirebase;
    }
    CommService.prototype.sendMessage = function (businessName, promoName, promoDescription) {
        var newpath = businessName; // nombre del negocio
        var path = "message/" + newpath;
        var newmessage = new _models_message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
        var newPostKey = this.Afirebase.database.ref().child('path').push().key;
        newmessage.key = newPostKey;
        newmessage.userName = this.authService.currentUser.email;
        newmessage.timeSent = this.getTimeStamp();
        newmessage.message = "Canjear cupón: " + promoName + ". " + promoDescription;
        this.Afirebase.database.ref(path).child(newPostKey).set({ newmessage: newmessage });
    };
    CommService.prototype.getMessages = function (businessName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var userName = _this.authService.currentUser.email;
                var msgRef = _this.Afirebase.database.ref('message/' + businessName);
                msgRef.limitToLast(1).on('value', function (snapshot) {
                    if (snapshot.val() !== null) {
                        var dMessage = snapshot.child(JSON.stringify(snapshot.val()).split('"')[1]).val().newmessage;
                        if (dMessage.userName !== userName) { // if the last message is not sent by me
                            if (dMessage.message === 'Ok') {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    }
                });
                //reject();
            }, 1000);
        });
    };
    CommService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth() + 1) + '/' +
            now.getUTCDate();
        var time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();
        return (date + ' ' + time);
    };
    CommService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CommService);
    return CommService;
}());



/***/ })

}]);
//# sourceMappingURL=oferta-detalle-oferta-detalle-module.js.map