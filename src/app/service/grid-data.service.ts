import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../product/product.component';
import { UserInfo } from '../user/user.component'

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

  addUser(userList: UserInfo[]) {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(userList);
    const str = JSON.stringify(userList)

    let params = new HttpParams();
    params = params.set('routingKey', 'user.info');
    params = params.set('exchangeName', 'direct_go');

    return this.http.post(`/api/user`, userList, {params});
  }

  deleteUsers(userList: UserInfo[]) {
    console.log(userList);
    return this.http.request('delete', `/api/users`, { body: userList });
  }

  getUsers() {
    return this.http.get<any[]>(`/api/users`);
  }

  setProducts(products : Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }
}
