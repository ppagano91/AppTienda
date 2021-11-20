import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsData: any;

  private productUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get(this.productUrl);
  }
}
