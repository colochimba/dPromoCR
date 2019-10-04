import { Component } from '@angular/core';
import { OfertasProviderService } from '../ofertas-provider.service';

import * as jsondata from '../../json/index.json'; 

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
      (data)=> {this.ofertas = (data as any).promotions;},
      (error) => {console.log(error);}
    )
  
 //this.ofertas = (jsondata as any).default.promotions; //para trabajar con el json local
 /*//para evitar el CORS error y enviar mediante un proxy
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.dpromocr.com/json/promos.json"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) 
.then(response => response.text())
.then(data => {this.ofertas = JSON.parse(data);})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) 
    */}
}
