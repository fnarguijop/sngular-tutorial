import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})
export class CarritoService {
elementos = [];

agregar(product) {
    this.elementos.push(product);
  }

  obtenerElemento() {
    return this.elementos;
  }

  limpiarCarrito() {
    this.elementos = [];
    return this.elementos;
  }

getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
  constructor( private http: HttpClient) { }

}