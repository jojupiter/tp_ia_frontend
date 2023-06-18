import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  static results:any
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
    })
 };  url :string =environment.url ;
  constructor(private http: HttpClient) { }

  send(message:String): Observable<any> {
    console.log("MESSAGE",message)
    return this.http.post<any>(this.url+"send/",JSON.stringify({text:message}),this.httpOptions)
  }


  static getResults():any{
    return this.results;
  }

  static setResults(results:any){
    this.results=results;
  }
}
