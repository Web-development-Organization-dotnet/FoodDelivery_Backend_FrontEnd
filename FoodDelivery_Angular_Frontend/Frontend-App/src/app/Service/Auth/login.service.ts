import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(e: loginModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      email: e.username,
      password: e.password
    };

    return this.http.post<any>('https://localhost:44369/api/Admin/Login', data, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
}
