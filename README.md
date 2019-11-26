# dPromoCR



##
CORS issue
##
Dev Solution: Plugin to turn off the browser’s same-origin policy.
Prod Solution:
-Send the request to a proxy
The one downside of the cors-anywhere proxy is that can often take a while to receive a response. The latency is high enough to make your applications appear a bit sluggish.
##
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.dpromocr.com/json/promos.json";
fetch(proxyurl + url) 
.then(response => response.text())
.then(data => {this.ofertas = JSON.parse(data);})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
##
- Create own proxy nodejs
https://github.com/15Dkatz/beat-cors-server/blob/master/index.js

##
Ingresar
##
-authentication method gives error Post on Chrome not on Firefox
-created new test user testiuser@test.com test123
-ingresar.page.ts -> OnSubmitLogin -> navigate ''

##
Noticias
##
ionic generate page noticias

##
Tab2Page
##
Dinamically creates de news from de json and opens the modal when clicked.
*ngFor="let noticia of noticias"
ion-card (click)="presentModal(noticia)"
img [src]="noticia.promoPhotoURL"
subtitle>{{noticia.promoBusiness}}
title>{{noticia.promoName}}

async presentModal(noticia) {
    const modal = await this.modalController.create({
      component: NoticiaPage,
      componentProps: {
        'promoName': noticia.promoName,
        'promoBusiness': noticia.promoBusiness,
        'promoPhotoURL': noticia.promoPhotoURL,
        'promoDescription': noticia.promoDescription
      }
    });
    return await modal.present();
  }

##
JSON file
##
index.json
{"promotions":[{"promoName": "Promocion 1",
                "promoID": 1,
                "promoBusiness": "Tienda Alito",
                "promoPhotoURL": "https://via.placeholder.com/150/c96cad",
                "promoDescription": "Aqui una leve descripcion de que se trata la promocion"
                },...],
"news":[{"newsName": "Noticia 1",
        "newsID": 1,
        "newsBusiness": "Tienda Alito",
        "newsPhotoURL": "https://source.unsplash.com/random/?shops1",
        "newsDescription": "Aqui una leve descripcion de que se trata la promocion"
        },...],
"featured":[{"featuredName": "Promocion 1",
            "featuredID": 1,
            "featuredBusiness": "Tienda Alito",
            "featuredPhotoURL": "https://via.placeholder.com/150/c96cad",
            "featuredDescription": "Aqui una leve descripcion de que se trata la promocion"
            },...],...}


##
RegistroPage
##
auth.service => createUserWithEmailAndPassword

##
OfertaDetalle
##
Added a new service NavService where I store the navParams to pass the promo details from Tab1 to OfertaDetalle

##
DB
##
Created User class in models. Object to be stored in the DB


##
Correos electrónicos
##
Las plantillas para los correos deben ser configuradas en Firebase->Autenticación->Plantillas

##


##
next
##
-MisPromos (page, save in DB)
-App for businesses
-Login with FB


Urgente
-Integrate with Paypal...crear la opción de usar gratuitamente
-Avatar con la foto del usuario
-Pagina de configuracion de app...
-Politicas de privacidad
-Ayuda
-Contacto
-Donde guardar la info de configuracion de paypal? json?
--Interfaz para cargar informacion al JSON con las ofertas


Sandbox account
sb-htvlx399123@business.example.com
Client ID
AWZ4X_SW4yS2KraeSgeRWOTlNOjah3Q6Lm1sjQjkomewImktUAnkYwsaSwsOynvbdoj5C5jsTSSjCQG-

secret
EEohdV-sPqMKxuLlgG7FN9bqvX08gzEsmKe47_irP392EmO9onFUPZ948wzh7dkMr2fJGIj8-Cpj2TEE


Sandbox Account
sb-4o543b418351@personal.example.com
AccessToken
access_token$sandbox$4ffxdmt3mk445bgz$09cdcdcbde495c92f906d1095c51be58
ExpiryDate
25 Oct 2029

First Name:
John
Last Name:
Doe
Email ID:
sb-4o543b418351@personal.example.com
System Generated Password:
m))J3Y%v
Phone Number:
9744606688
Account Type:
Premier
Account ID:
GD5SCR52TXTJE
Status:
Verified
Country:
QA
Account Number:
94360619
Routing Number:
325272063
Credit Card
Credit Card Number:
4146276429179073
Credit Card Type:
VISA
Expiration Date:
10/2024
PayPal
Balance:
5000.00 USD
 

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="YYBRU4N4JV5BE">
<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>


<A HREF="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=8LJ55C43NKS2W">
<IMG SRC="https://www.paypalobjects.com/es_XC/i/btn/btn_unsubscribe_SM.gif" BORDER="0">
</A>


Business information
dPromoCR
Update
PayPal Merchant ID8LJ55C43NKS2W



First Name:
John
Last Name:
Doe
Email ID:
sb-43q6yt216534@business.example.com
System Generated Password:
@1vKXbC!
Phone Number:
987703
Account Type:
Business
Account ID:
A3HQJVCY6QECQ
Status:
Verified
Country:
CR



{
    "id": "PROD-92W02269TM2197937",
    "name": "dPromoCR subscription service",
    "description": "Promotions service for Costa Rica",
    "create_time": "2019-10-29T01:58:29Z",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v1/catalogs/products/PROD-92W02269TM2197937",
            "rel": "self",
            "method": "GET"
        },
        {
            "href": "https://api.sandbox.paypal.com/v1/catalogs/products/PROD-92W02269TM2197937",
            "rel": "edit",
            "method": "PATCH"
        }
    ]
}


{
    "id": "P-2XF38890MB586901YLW3Z7RA",
    "product_id": "PROD-92W02269TM2197937",
    "name": "Basic Plan",
    "status": "ACTIVE",
    "description": "Basic plan",
    "create_time": "2019-10-29T02:11:16Z",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v1/billing/plans/P-2XF38890MB586901YLW3Z7RA",
            "rel": "self",
            "method": "GET"
        },
        {
            "href": "https://api.sandbox.paypal.com/v1/billing/plans/P-2XF38890MB586901YLW3Z7RA",
            "rel": "edit",
            "method": "PATCH"
        },
        {
            "href": "https://api.sandbox.paypal.com/v1/billing/plans/P-2XF38890MB586901YLW3Z7RA/deactivate",
            "rel": "self",
            "method": "POST"
        }
    ]
}