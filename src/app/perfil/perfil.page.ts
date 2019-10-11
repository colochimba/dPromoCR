import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  currentUser
  constructor(private authservice: AuthService, public toastController: ToastController) { }

  ngOnInit() {
    this.currentUser = this.authservice.currentUser;
  }

  async updateUser(){
    this.authservice.updateUser();
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Información de perfil actualizada.',
      duration: 3000,
      showCloseButton: true
    });
    return await toast.present();
  }

}
