import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';
import { agentRegisterModel } from '../../Models/agentRegister';
import { custRegisterModel } from '../../Models/custRegister';

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

  agentRegistration(e: agentRegisterModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      name: e.agentname,
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
  //CUSTOMER----
  // agentlogin(e: loginModel) {
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });

  //   const data = {
  //     email: e.username,
  //     password: e.password
  //   };

  //   return this.http.post<any>('https://localhost:44369/api/Agent/Login', data, { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );

  // }

  customerRegistration(e: custRegisterModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      name: e.cust_name,
      password: e.cust_pin,
      email: e.cust_email,
      phone: e.cust_phno,
      type: e.cust_type_cd
      //photo_id_no: e.photo_id_no
    };

    return this.http.post<any>('https://localhost:44369/api/Customer/Register', data, { headers: httpHeader }).pipe(
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
