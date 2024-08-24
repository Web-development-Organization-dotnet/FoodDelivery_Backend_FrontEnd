import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAccountDetails(id: any) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/Admin/LoginDetails?empId=' + id, { headers: httpHeader }).pipe(
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
