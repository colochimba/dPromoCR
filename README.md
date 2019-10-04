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
