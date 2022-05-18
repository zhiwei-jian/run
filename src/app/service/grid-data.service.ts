import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  private products = [];

  // headers : Headers;
  constructor(private http: HttpClient) { }

  getHello(userName: string) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let httpParams = new HttpParams();
    httpParams.set('name', userName);
    return this.http.get(`/api/hello?name=` + userName, {headers, responseType: 'text'});
  }

  addUser(userList) {
    console.log(userList);
  }

  setProducts(products : Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

}
