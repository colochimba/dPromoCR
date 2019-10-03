import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-oferta-detalle',
  templateUrl: './oferta-detalle.page.html',
  styleUrls: ['./oferta-detalle.page.scss'],
})
export class OfertaDetallePage implements OnInit {

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(public alertController: AlertController) { }

  ngOnInit() {
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

}
