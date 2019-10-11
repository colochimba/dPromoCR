import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  currentUser
  constructor(private authservice: AuthService) {}

  ngOnInit(){
    this.currentUser = this.authservice.currentUser;
  }

}
