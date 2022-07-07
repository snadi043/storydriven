import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageapiService {

  constructor(private http: HttpClient) { }

  getFiles(url: string): Observable<any> {
    return this.http.get(url); // 'http://localhost:8080/api/file/all' anykind
  }

}







