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

module.exports = "<ion-content center padding class=\"bg-image\" fullscreen=\"true\">\n\n    <ion-img src=\"assets/images/logo-dpromocr.png\"></ion-img>\n    <div text-center>\n        <h2>Agregar Metodo de Pago</h2>\n    </div>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Numero de tarjeta</ion-label>\n        <ion-input type=\"number\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">Vence</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label position=\"floating\">CVV</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Guardar Tarjeta</ion-label>\n        <ion-checkbox slot=\"end\" checked=\"true\"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-card class=\"welcome-card\">\n        <ion-card-header>\n            <ion-card-subtitle>Get Started</ion-card-subtitle>\n            <ion-card-title>PayPal Sample</ion-card-title>\n            <ion-row>\n                <ion-col>\n                    Total Payment\n                </ion-col>\n                <ion-col>\n                    {{currencyIcon}}{{paymentAmount}}\n                </ion-col>\n            </ion-row>\n        </ion-card-header>\n        <ion-card-content>\n            <A HREF=\"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TDPSUTK2U83UN\">\n                <IMG SRC=\"https://www.paypalobjects.com/es_XC/i/btn/btn_subscribeCC_LG.gif\" BORDER=\"0\">\n                <img alt=\"\" border=\"0\" src=\"https://www.sandbox.paypal.com/es_XC/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n            </A>\n        </ion-card-content>\n    </ion-card>\n    <ion-button expand=\"block\" class=\"ion-margin-top\" padding routerLink=\"/\">Regresar</ion-button>\n\n\n    <A HREF=\"https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=8LJ55C43NKS2W\">\n        <IMG SRC=\"https://www.paypalobjects.com/es_XC/i/btn/btn_unsubscribe_SM.gif\" BORDER=\"0\">\n    </A>\n\n\n\n    <div class=\"row col-md-12 align-items-center justify-content-center\">\n\n        <div class=\"col\">\n            <select id=\"ddlplan\" [(ngModel)]=\"planId\">  \n            <option value=\"\">Select Plan </option>  \n            <option value=\"P-2XF38890MB586901YLW3Z7RA\">SINGLE DEVICE MONTHLY </option>   \n            <option value=\"P-3NS34795KB814132ALVTDMKI\">Test Daily Plan</option>  \n          </select></div>\n        <div class=\"col\">\n            <div #paypal></div>\n        </div>\n\n    </div>\n\n\n</ion-content>"

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
        this.paymentAmount = '5.99';
        this.currency = 'USD';
        this.currencyIcon = '$';
        this.basicAuth = 'Basic QVdaNFhfU1c0eVMyS3JhZVNnZVJXT1RsTk9qYWgzUTZMbTFzalFqa29tZXdJbWt0VUFua1l3c2FTd3NPeW52YmRvajVDNWpzVFNTakNRRy06RUVvaGRWLXNQcU1LeHVMbGdHN0ZOOWJxdlgwOGd6RXNtS2U0N19pclAzOTJFbU85b25GVVBaOTQ4d3poN2RrTXIyZkpHSWo4LUNwajJURUU=';
    }
    PagoMembresiaPage.prototype.ngOnInit = function () {
        var self = this;
        this.planId = 'P-46H56521AR410470DLW33APQ'; //Default Plan Id
        paypal.Buttons({
            createSubscription: function (data, actions) {
                return actions.subscription.create({
                    'plan_id': self.planId,
                });
            },
            onApprove: function (data, actions) {
                console.log(data);
                alert('Se ha creado la suscripción satisfactoriamente ' + data.subscriptionID);
                self.getSubcriptionDetails(data.subscriptionID);
                this.authService.currentUser.active = true; //this has to be saved to the DB when the payment is successfull
            },
            onCancel: function (data) {
                // Show a cancel page, or return to cart  
                console.log(data);
            },
            onError: function (err) {
                // Show an error page here, when an error occurs  
                console.log(err);
            }
        }).render(this.paypalElement.nativeElement);
    };
    PagoMembresiaPage.prototype.getSubcriptionDetails = function (subcriptionId) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(JSON.parse(this.responseText));
                alert(JSON.stringify(this.responseText));
            }
        };
        xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);
        xhttp.setRequestHeader('Authorization', this.basicAuth);
        xhttp.send();
    };
    PagoMembresiaPage.prototype.makePayment = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PagoMembresiaPage.prototype, "paypalElement", void 0);
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

/*payWithPaypal() {
  console.log("Pay ????");
  this.payPal.init({
        PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
        PayPalEnvironmentSandbox: 'AWZ4X_SW4yS2KraeSgeRWOTlNOjah3Q6Lm1sjQjkomewImktUAnkYwsaSwsOynvbdoj5C5jsTSSjCQG-'
      }).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
  // Only needed if you get an "Internal Service Error" after PayPal login!
  //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
  let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Monthly subscription to DpromoCR', 'subscription');
  this.payPal.renderSinglePaymentUI(payment).then((res) => {
  console.log(res);
  // Successfully paid
  // Example sandbox response
  //
  // {
  //   "client": {
  //     "environment": "sandbox",
  //     "product_name": "PayPal iOS SDK",
  //     "paypal_sdk_version": "2.16.0",
  //     "platform": "iOS"
  //   },
  //   "response_type": "payment",
  //   "response": {
  //     "id": "PAY-1AB23456CD789012EF34GHIJ",
  //     "state": "approved",
  //     "create_time": "2016-10-03T13:33:33Z",
  //     "intent": "sale"
  //   }
  // }
          }, () => {
  // Error or render dialog closed without being successful
          });
        }, () => {
  // Error in configuration
        });
      }, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
      });
    }


    
    

}


/**********
* var billingPlanAttribs = {
name: 'Subscripción mensual a dPromoCR: Standard',
description: 'Plan mensual para obtener las promociones de nuestros negocios asociados.',
type: 'fixed',
payment_definitions: [{
  name: 'Standard Plan',
  type: 'REGULAR',
  frequency_interval: '1',
  frequency: 'MONTH',
  cycles: '11',
  amount: {
    currency: 'USD',
    value: '5.99'
  }
}],
merchant_preferences: {
  setup_fee: {
    currency: 'USD',
    value: '1'
  },
  cancel_url: 'http://localhost:3000/cancel',
  return_url: 'http://localhost:3000/processagreement',
  max_fail_attempts: '0',
  auto_bill_amount: 'YES',
  initial_fail_amount_action: 'CONTINUE'
}
};



paypal.billingPlan.create(billingPlanAttribs, function (error, billingPlan){
var billingPlanUpdateAttributes;

if (error){
  console.error(JSON.stringify(error));
  throw error;
} else {
  // Create billing plan patch object
  billingPlanUpdateAttributes = [{
    op: 'replace',
    path: '/',
    value: {
      state: 'ACTIVE'
    }
  }];

  // Activate the plan by changing status to active
  paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes, function(error, response){
    if (error){
      console.error(JSON.stringify(error));
      throw error;
    } else {
      console.log('Billing plan created under ID: ' + billingPlan.id);
    }
  });
}
});



var billingPlan = "1234567890";
var billingAgreementAttributes;
var isoDate = new Date();

isoDate.setSeconds(isoDate.getSeconds() + 4);
isoDate.toISOString().slice(0, 19) + 'Z';

billingAgreementAttributes = {
name: 'Standard Membership',
description: 'Food of the World Club Standard Membership',
start_date: isoDate,
plan: {
  id: billingPlan
},
payer: {
  payment_method: 'paypal'
},
shipping_address: {
  line1: 'W 34th St',
  city: 'New York',
  state: 'NY',
  postal_code: '10001',
  country_code: 'US'
}
};



var links = {};

// Use activated billing plan to create agreement
paypal.billingAgreement.create(billingAgreementAttributes, function (error, billingAgreement){
if (error){
  console.error(JSON.stringify(error));
  throw error;
} else {
  // Capture HATEOAS links
  billingAgreement.links.forEach(function(linkObj){
    links[linkObj.rel] = {
      href: linkObj.href,
      method: linkObj.method
    };
  })

  // If redirect url present, redirect user
  if (links.hasOwnProperty('approval_url')){
    //REDIRECT USER TO links['approval_url'].href
  } else {
    console.error('no redirect URI present');
  }
}
});




var token = req.query.token;

paypal.billingAgreement.execute(token, {}, function (error, billingAgreement){
if (error){
  console.error(JSON.stringify(error));
  throw error;
} else {
  console.log(JSON.stringify(billingAgreement));
  console.log('Billing Agreement Created Successfully');
}
});


***********/


/***/ })

}]);
//# sourceMappingURL=pago-membresia-pago-membresia-module.js.map