import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkMode = false;
  active = false;

  cartLength = 0;
  links = [
    {
      path: 'home',
      description: 'Inicio',
      isIcon: false,
    },
    {
      path: 'products',
      description: 'Productos',
      isIcon: false,
    },
    {
      path: 'contact',
      description: 'Contacto',
      isIcon: false,
    },
    {
      path: 'cart',
      description: 'shopping_cart',
      isIcon: true,
    },
  ];

  menu = true;

  constructor(private _cartSerice: CartService) {}

  ngOnInit(): void {}

  getCartLength() {
    // this.cartLength = this._cartSerice.getCartLength();
    return this._cartSerice.getCartLength();
  }

  toggleMenu(): void {
    this.menu = !this.menu;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }

  toggleActive(): void {
    this.active = !this.active;
  }
}
