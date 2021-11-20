import { Injectable } from '@angular/core';
import { ProductsComponent } from '../pages/products/components/products/products.component';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Por qué se define de esta manera a cartProducts
  private cartProducts: any[] = [];
  constructor() {}

  addProductToCart(product: any) {
    //Se actualizan los datos/contenido del cart
    this.cartProducts = [...this.cartProducts, product];
    console.log(this.cartProducts);
  }

  getCartProducts() {
    //Devuelve los productos.
    return this.cartProducts;
  }

  getCartLength() {
    return this.cartProducts.length;
  }

  removeProductFromCart(id: number) {
    //Elimina los productos del carrito mediante un ID
    this.cartProducts = this.cartProducts.filter(
      (product) => product.id !== id
    );
    console.log(this.cartProducts);
  }
}
