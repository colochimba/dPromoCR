import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavService } from '../servicios/nav.service';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-oferta-detalle',
  templateUrl: './oferta-detalle.page.html',
  styleUrls: ['./oferta-detalle.page.scss']
})
export class OfertaDetallePage implements OnInit {

  ofertaDetalle
  recomendaciones
  

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(public navParams: NavService, public authService: AuthService, public alertController: AlertController) {}

  ngOnInit() {
    this.ofertaDetalle = this.navParams.myParam.oferta;
    this.recomendaciones = this.navParams.myParam.recomendaciones;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Adquiere la Membresia!',
      message: 'Para poder redemir esta promo necesita aquirir la Membresia DpromoCR',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Membresia',
          handler: () => {
            window.location.href = "/pago-membresia";
          }
        }
      ]
    });

    await alert.present();
  }

  presentOferta(ofertaActual){
    let categoria = ofertaActual.promoCategory;

    this.ofertaDetalle = ofertaActual;
    this.recomendaciones =  this.navParams.destacadas.filter(oferta => oferta.promoCategory === categoria && oferta.promoID != ofertaActual.promoID);
  }
}
