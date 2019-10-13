import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-pago-membresia',
  templateUrl: './pago-membresia.page.html',
  styleUrls: ['./pago-membresia.page.scss'],
})
export class PagoMembresiaPage implements OnInit {

  
  constructor(private authService: AuthService) { 
    
  }

  ngOnInit() {
  }

  makePayment(){
    this.authService.currentUser.active = true; //this has to be saved to the DB when the payment is successfull
  }

}
