import { Component } from '@angular/core';
import { OfertasProviderService } from '../ofertas-provider.service';
import { NavService } from '../servicios/nav.service';

import * as jsondata from '../../json/index.json'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ofertas
  categorias
  destacadas
  categoriaActual
  constructor(private navParams: NavService, private proveedor:OfertasProviderService) {}

  ngOnInit(){
    /*this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.ofertas = (data as any).promotions;},
      (error) => {console.log(error);}
    )*/
    this.categoriaActual = ""
    this.destacadas = (jsondata as any).default.featured;
  this.categorias = (jsondata as any).default.categories;
 this.ofertas = (jsondata as any).default.promotions; //para trabajar con el json local

 this.navParams.ofertas = this.ofertas;
 this.navParams.destacadas = this.destacadas;
 /*//para evitar el CORS error y enviar mediante un proxy
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.dpromocr.com/json/promos.json"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) 
.then(response => response.text())
.then(data => {this.ofertas = JSON.parse(data);})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) 
    */}

    presentOferta(ofertaActual){
      let categoria = ofertaActual.promoCategory;
  
      this.navParams.myParam = {"oferta": ofertaActual, "recomendaciones": this.destacadas.filter(oferta => oferta.promoCategory === categoria && oferta.promoID != ofertaActual.promoID)};
    }

    actualizarListaPromos(categoria){
      this.ofertas = (jsondata as any).default.promotions;
      if(categoria != "Todos"){
        this.ofertas = this.ofertas.filter(oferta => oferta.promoCategory === categoria);
        this.categoriaActual = " de "+categoria;
      }else{
        this.categoriaActual = "";
      }
    }
    
}
