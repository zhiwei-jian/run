import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  // headers : Headers;
  constructor(private http: HttpClient) { }

  getHello(){
    
    let headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // headers.append('GET', 'POST', 'OPTIONS');


    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Origin','http://localhost:4200');



        // Website you wish to allow to connect

        headers.append('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get('http://10.199.196.93:30194/api/hello?name=Lina', { headers });
  }

  getR(){
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('userId', '123');
    headers.append('entitlements', 'ACCESS_REQUEST.GLOBAL.APPROVE');
    headers.append('Authorization', 'Basic Y2lxQWRtaW46Y2lxNlRNYmEw');
    return this.http.get('https://cloud3deviiq-access-request-adapter.r3.pcf.dell.com/api/resource/manage', { headers });
  }
}
