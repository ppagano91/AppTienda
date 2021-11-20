import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: any;
  @Output() productRemovalEvent = new EventEmitter();
  constructor(private _cartServices: CartService) {}

  ngOnInit(): void {}

  removeProduct() {
    //Remover el producto del carrito
    this._cartServices.removeProductFromCart(this.productData.id);
    //Remover
    this.productRemovalEvent.emit();
  }
}
