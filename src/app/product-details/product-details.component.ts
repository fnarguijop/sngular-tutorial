import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CarritoService } from '../carrito.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
producto;


  constructor(private route: ActivatedRoute,private carritoService: CarritoService) { }
 
agregar(product){
  this.carritoService.agregar(product);
  window.alert('Producto agregado al carrito');
}

 ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.producto = products[+params.get('productId')];
  });
}

}