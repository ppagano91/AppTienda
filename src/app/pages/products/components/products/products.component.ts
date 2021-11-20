import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsData: any;
  loading: boolean = true;
  // subsArray: Subscription[] = [];
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    //Subscripcicón cuando el componente se crea
    // this.subsArray.push()
    this._productService.getData().subscribe((data: any) => {
      // console.log('data:', data);
      this.productsData = data;
      this.loading = false;
    });

    this.productsData = this._productService;
    console.log(this.productsData);
  }

  // ngOnDestroy(): void {
  //   //Desubscripcicón cuando el componente se destruye
  //   this.subsArray.forEach((sub) => sub.unsubscribe);
  // }
}
