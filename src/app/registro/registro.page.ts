import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  submitRegister(){
    this.authService.register(this.email, this.password).then( res => {
      alert('Please validate your email address. Kindly check your inbox.');
      this.router.navigate(['/ingresar']);
    }).catch(err => alert('No se pudo crear el usuario.'+ err))
  }

}
