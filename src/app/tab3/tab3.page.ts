import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  currentUser
  constructor(private authservice: AuthService, public router: Router) {}

  ngOnInit(){
    this.currentUser = this.authservice.currentUser;
  }

  logout(){
    this.authservice.logoutUser().then(()=>{
      this.router.navigate(['/ingresar']);
    }).catch(error=>{
      alert("Error inesperado");
      });
  }

}
