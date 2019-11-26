import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router, private storage: Storage) { 
    this.storage.get("dpromocr").then((val) => authService.authUser = (<firebase.User>JSON.parse(val)));
  }

  ngOnInit() {
  }

  OnSubmitLogin(){
    //https://stackoverflow.com/questions/47751377/firebase-prevent-same-account-on-multiple-devices
      //alert("Sesión iniciada. Desea cerrar la sesión para ingresar de otro dispositivo?");
    //}else{
      this.authService.login(this.email, this.password).then( res => {
        this.password = "";
        this.storage.set("dpromocr", JSON.stringify(this.authService.authUser));
        this.router.navigate(['tab']);
      }).catch(err => alert('los datos son incorrectos o no existe el usuario'+err));

      
    //}
  }

  onChangePassword(){
    if(this.email !== undefined && this.email !== ""){
      this.authService.changePassword(this.email).then( res => {
        alert('Se ha enviado el correo para cambiar la contraseña');
      }).catch(err => alert('Los datos son incorrectos o no existe el usuario'));
    }
    else{
      alert('Ingrese el correo electrónico de su cuenta');
    }
  }

}
