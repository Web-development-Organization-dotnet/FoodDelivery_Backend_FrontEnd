import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
//Supplier type methods:
  getFoodTypes() {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/FoodType/GetAllFoodType', { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
  getFoodTypebyId(id:string) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/FoodType/FoodTypeDetails?foodTypeCD='+ id, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
  registerFoodType(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.post<any>('https://localhost:44369/api/FoodType/RegisterFoodType',  obj, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
  updateFoodType(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.put<any>('https://localhost:44369/api/FoodType/UpdateFoodType',  obj, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
//Food info methods:

  registerFoodInfo(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.post<any>('https://localhost:44369/api/FoodInfo/RegisterFoodInfo',  obj, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
  getAllFoodInfo(){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/FoodInfo/GetAllFoodInfo', { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
  getFoodInfobyId(id:string) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/FoodInfo/GetFoodInfo?food_id='+ id, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
  updateFoodInfo(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.put<any>('https://localhost:44369/api/FoodInfo/updateFoodInfo',  obj, { headers: httpHeader }).pipe(
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
