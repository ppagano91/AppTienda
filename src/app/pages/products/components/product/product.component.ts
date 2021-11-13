import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: any;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    // console.log(this.productData);
  }

  addProductToCart() {
    this._cartService.addProductToCart(this.productData);
  }
}
