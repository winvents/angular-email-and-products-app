import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  private static API_URLS = {
    GET_ALL_PRODUCTS: `${environment.apiProductUrl}/produtos`,
    CREATE_PRODUCT: `${environment.apiProductUrl}/produtos`
  }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  public getProducts() {
    return this.httpClient.get(ProductService.API_URLS.GET_ALL_PRODUCTS)
  }

  public saveProduct(product: Product) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Product>(ProductService.API_URLS.CREATE_PRODUCT, product, { headers });
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
