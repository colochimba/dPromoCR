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
  //before this method we should validate the fields needed.
  async updateUser(){
    this.authservice.updateUserInDB();
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Información de perfil actualizada.',
      duration: 3000,
      showCloseButton: true
    });
    return await toast.present();
  }

}
