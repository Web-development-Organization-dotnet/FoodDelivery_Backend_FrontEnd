import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
//Supplier type methods:
  getCustomerTypes() {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/Customer/GetAllCustomerType', { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
  // getSupplierTypebyId(id:string) {
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });

  //   return this.http.get<any>('https://localhost:44369/api/FoodSupplier/GetAllSupplierTypeByID?id='+ id, { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );

  // }
  registerCustomerType(obj: any){
   const httpHeader = new HttpHeaders({
     'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.post<any>('https://localhost:44369/api/Customer/RegisterCustomerType',  obj, { headers: httpHeader }).pipe(
     map((d) => {
       return d;
      }),
      catchError((err) => {
        console.log(err);
       return err;
      })
   );
 }
  // updateSupplierType(obj: any){
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });
  // return this.http.put<any>('https://localhost:44369/api/FoodSupplier/UpdateSupplierType',  obj, { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );
  // }
//Supplier info methods:

  // registerSupplierInfo(obj: any){
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });
  // return this.http.post<any>('https://localhost:44369/api/SupplierInfo/InsertSupplierInfo',  obj, { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );
  // }
  // getAllSupplierInfo(){
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });

  //   return this.http.get<any>('https://localhost:44369/api/SupplierInfo/GetAllSupplierInfo', { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );
  // }
  // getSupplierInfobyId(id:string) {
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });

  //   return this.http.get<any>('https://localhost:44369/api/SupplierInfo/GetAllSupplierInfoById?id='+ id, { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );

  // }
  // updateSupplierInfo(obj: any){
  //   const httpHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'true'
  //   });
  // return this.http.put<any>('https://localhost:44369/api/SupplierInfo/UpdateSupplierInfo',  obj, { headers: httpHeader }).pipe(
  //     map((d) => {
  //       return d;
  //     }),
  //     catchError((err) => {
  //       console.log(err);
  //       return err;
  //     })
  //   );
  // }
}
