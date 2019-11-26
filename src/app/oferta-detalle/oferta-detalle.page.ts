import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavService } from '../servicios/nav.service';
import { AuthService } from '../servicios/auth.service';
import { CommService } from '../servicios/comm.service';


@Component({
  selector: 'app-oferta-detalle',
  templateUrl: './oferta-detalle.page.html',
  styleUrls: ['./oferta-detalle.page.scss']
})
export class OfertaDetallePage implements OnInit {

  ofertaDetalle
  recomendaciones
  public waiting: boolean = false;

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(public navParams: NavService, public authService: AuthService, private commService: CommService, public alertController: AlertController) {}

  ngOnInit() {
    this.ofertaDetalle = this.navParams.myParam.oferta;
    this.recomendaciones = this.navParams.myParam.recomendaciones;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Adquiere la Membresía!',
      message: 'La Promo ya fue utilizada o necesita aquirir la Membresía DpromoCR',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Membresía',
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

  //Este método debe enviar la notificación al negocio para aceptar el cupón.
  //El negocio debe responder
  //Si el cupon se va a canjear debe realizar lo siguiente
  canjearCupon(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    this.commService.sendMessage(this.ofertaDetalle.promoBusiness,this.ofertaDetalle.promoName, this.ofertaDetalle.promoDescription);
    this.waiting = true;
    this.get().then(()=>{
      alert("Promoción aplicada correctamente!");
      this.waiting = false;
    this.authService.currentUser.mispromos.push({"promoID":this.ofertaDetalle.promoID,
                                                "date":dateTime,
                                                "name":this.ofertaDetalle.promoName,
                                                "business":this.ofertaDetalle.promoBusiness,
                                                "photo":this.ofertaDetalle.promoPhotoURL,
                                                "description": this.ofertaDetalle.promoDescription});
    //update the user in DB
    }).catch(err => {alert("Lo sentimos la promoción no aplica.");this.waiting=false;});

  }

  //true si la promo no ha sido usada (guardada en mis promos)
  //false si la promo ya fue usada y esta guardada en mis promos
  unusedPromo(id){
    for(let i=0; i < this.authService.currentUser.mispromos.length; i++){
      if(this.authService.currentUser.mispromos[i].promoID == id){
        return false;
      }
    }
    return true;
  }


  async get(){
    await this.commService.getMessages(this.ofertaDetalle.promoBusiness);
   }
}
