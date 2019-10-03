import { Component } from '@angular/core';
import { OfertasProviderService } from '../ofertas-provider.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ofertas

  constructor(private proveedor:OfertasProviderService) {}

  ngOnInit(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.ofertas = data;},
      (error) => {console.log(error);}
    )
  }

}
