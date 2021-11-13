import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsData: any;
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this._productService.getData().subscribe((data) => {
      console.log(data);
      this.productsData = data;
    });

    this.productsData = this._productService;
    console.log(this.productsData);
  }
}
