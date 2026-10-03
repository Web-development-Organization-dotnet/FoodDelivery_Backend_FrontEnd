import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
    
    constructor(private http: HttpClient) { }
//Supplier type methods:
getSupplierByFoodType(id:string) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/SupplierInfo/GetAllSupplierInfoByFoodType?food_type_code='+ id, { headers: httpHeader }).pipe(
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