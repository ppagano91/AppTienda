import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Por qué se define de esta manera a cartProducts
  private cartProducts: any[] = [];
  constructor() {}

  addProductToCart(product: any) {
    this.cartProducts = [...this.cartProducts, product];
    console.log(this.cartProducts);
  }

  getCartProducts() {
    return this.cartProducts;
  }
}
