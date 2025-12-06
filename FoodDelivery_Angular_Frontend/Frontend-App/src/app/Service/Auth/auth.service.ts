import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  registration(e: registerModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      name: e.fullname,
      password: e.password,
      email: e.email,
      phone: e.phone,
      photo_id_no: e.photo_id_no
    };

    return this.http.post<any>('https://localhost:44369/api/Admin/Register', data, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }

  //AGENT----
agentlogin(e: loginModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      email: e.username,
      password: e.password
    };

    return this.http.post<any>('https://localhost:44369/api/Agent/Login', data, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }

  agentRegistration(e: registerModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      name: e.fullname,
      password: e.password,
      email: e.email,
      phone: e.phone,
      photo_id_no: e.photo_id_no
    };

    return this.http.post<any>('https://localhost:44369/api/Agent/Register', data, { headers: httpHeader }).pipe(
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
