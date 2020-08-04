import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingCosts;
  constructor(private carritoService: CarritoService, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.shippingCosts = this.carritoService.getShippingPrices();
  }

}