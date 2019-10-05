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
-ingresar.page.ts -> OnSubmitLogin -> navigate (change to '')

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
"featured":[{"featuredName": "Destacado 1",
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
