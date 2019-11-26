import { Component, OnInit, Input } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  newsName
  newsBusiness
  newsPhotoURL
  newsDescription
  // Data passed in by componentProps
  @Input() promoName: string;
  @Input() promoBusiness: string;
  @Input() promoPhotoURL: string;
  @Input() promoDescription: string;

  constructor(navParams: NavParams, private modalCtrl:ModalController) {
    this.newsName = this.promoName;
    this.newsBusiness = this.promoBusiness;
    this.newsPhotoURL = this.promoPhotoURL;
    this.newsDescription = this.promoDescription;
  }

  ngOnInit() {
    
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }


}