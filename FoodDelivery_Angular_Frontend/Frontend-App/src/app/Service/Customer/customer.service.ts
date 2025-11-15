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
  getCustomerTypebyId(id:string) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/Customer/GetCustType?cust_type_cd='+ id, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
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
  updateCustomerType(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.put<any>('https://localhost:44369/api/Customer/UpdateCustType',  obj, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
//Supplier info methods:

  registerCustomerInfo(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.post<any>('https://localhost:44369/api/CustomerInfo/RegisterCustomerInfo',  obj, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
  getAllCustomerInfo(){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/CustomerInfo/GetAllCustomerInfo', { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
  getCustomerInfobyId(id:string) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/CustomerInfo/GetCustInfoById?cust_id='+ id, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }
  updateCustomerInfo(obj: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
  return this.http.put<any>('https://localhost:44369/api/CustomerInfo/UpdateCustInfo',  obj, { headers: httpHeader }).pipe(
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
