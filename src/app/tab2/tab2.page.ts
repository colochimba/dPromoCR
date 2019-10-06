import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoticiaPage } from '../noticia/noticia.page';

import { OfertasProviderService } from '../ofertas-provider.service';
import * as jsondata from '../../json/index.json'; 


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  noticias
  
  constructor(public modalController: ModalController, private proveedor:OfertasProviderService){
  }

  ngOnInit(){
     /*this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.noticias = (data as any).news;},
      (error) => {console.log(error);}
    )*/
  
    this.noticias = (jsondata as any).default.news; //para acceder al json local
  }
  
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

  
}
  