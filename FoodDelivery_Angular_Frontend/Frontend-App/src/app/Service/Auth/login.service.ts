import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { 


  }
  login(){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      name:'abcd',
      password:'1234'
    };
    return this.http.post<any>('endpoint',data,{headers:httpHeader}).pipe(
      map((d)=>{
        return d;
      }),
      catchError((err)=>{
        console.log(err);
        return err;
      })
    );
  }
}
