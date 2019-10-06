import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertasProviderService {

  constructor(private http: HttpClient) { }

  obtenerDatos(){
    return this.http.get('https://www.dpromocr.com/json/promos.json');
  }
}
