import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions : any;
  url_service : string = environment.url_service;

  constructor(
    private http: HttpClient
    ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    }
  }

  getExample(example: string): Observable<any> {
    const params = new HttpParams()
    .append('emailexample', example)
    return this.http.get<any>(`${this.url_service}`, { params })
  }


  postExample(obj: any): Observable<any> {
    return this.http.post<any>(`${this.url_service}`, obj ,this.httpOptions);
  }

  uploadImage(obj: any): Observable<any> {
    return this.http.post<any>(`${this.url_service}/admin/uploadFile`, obj ,this.httpOptions);
  }


}