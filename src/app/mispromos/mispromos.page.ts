import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { NavService } from '../servicios/nav.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-mispromos',
  templateUrl: './mispromos.page.html',
  styleUrls: ['./mispromos.page.scss'],
})
export class MispromosPage implements OnInit {

  mispromos = new Array();
  constructor(public authService: AuthService, public navParams: NavService) { }

  ngOnInit() {
  }

}
