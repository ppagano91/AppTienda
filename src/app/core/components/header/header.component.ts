import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.menu = !this.menu;
  }
}
