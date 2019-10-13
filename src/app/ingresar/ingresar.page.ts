import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitLogin(){
    this.authService.login(this.email, this.password).then( res => {
      this.router.navigate(['']);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
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
