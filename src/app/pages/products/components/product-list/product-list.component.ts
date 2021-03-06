import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // El padre product-list necesita tener un array de productos que va a recibir todos los productos
  // Durante la iteración de cada elemento de product-list se lo pasan a el componente hijo (product)
  @Input() products = [];

  constructor() {
    console.log('products: ', this.products);
  }

  ngOnInit(): void {
    // this.setLoading();
  }

  // setLoading() {
  //   this.loadingEvent.emit(this.loading);
  // }
}
