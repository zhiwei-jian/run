import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  // headers : Headers;
  constructor(private http: HttpClient) { }

  getHello(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`/api/hello?name=Lina`,{ headers, responseType: 'text'});
  }

  getR(){
    return this.http.get('/ciq/aradapter/api/resource');
  }
}
