import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { User } from '../models/user';

declare var paypal; 

@Component({
  selector: 'app-pago-membresia',
  templateUrl: './pago-membresia.page.html',
  styleUrls: ['./pago-membresia.page.scss'],
})
export class PagoMembresiaPage implements OnInit {
  @ViewChild('paypal') paypalElement: ElementRef;
  paymentAmount: string = '5.99';
  currency: string = 'USD';
  currencyIcon: string = '$';

  planId: any;  
  subcripId: any;  
  basicAuth = 'Basic QVdaNFhfU1c0eVMyS3JhZVNnZVJXT1RsTk9qYWgzUTZMbTFzalFqa29tZXdJbWt0VUFua1l3c2FTd3NPeW52YmRvajVDNWpzVFNTakNRRy06RUVvaGRWLXNQcU1LeHVMbGdHN0ZOOWJxdlgwOGd6RXNtS2U0N19pclAzOTJFbU85b25GVVBaOTQ4d3poN2RrTXIyZkpHSWo4LUNwajJURUU='
  constructor(private authService: AuthService) {  }
   

  ngOnInit() {
    const self = this;  
    this.planId = 'P-46H56521AR410470DLW33APQ';  //Default Plan Id
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
  }

  getSubcriptionDetails(subcriptionId) {  
    const xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = function () {  
      if (this.readyState === 4 && this.status === 200) {  
        console.log(JSON.parse(this.responseText));  
        alert(JSON.stringify(this.responseText));  
      }  
    };  
    xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);  
    xhttp.setRequestHeader('Authorization', this.basicAuth);  
  
    xhttp.send();  
  }  

  makePayment(){
    
  }
}

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
