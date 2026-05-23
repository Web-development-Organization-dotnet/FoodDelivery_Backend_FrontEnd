import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { loginModel } from '../../Models/login';
import { registerModel } from '../../Models/register';
import { agentRegisterModel } from '../../Models/agentRegister';
import { custRegisterModel } from '../../Models/custRegister';
import { custLoginModel } from '../../Models/custLogin';
import { supplierLoginModel } from '../../Models/supplierLogin';
import { supplierRegisterModel } from '../../Models/supplierRegister';

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
  custlogin(e: custLoginModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      cust_email: e.cust_email,
      cust_passwd: e.cust_passwd
    };

    return this.http.post<any>('https://localhost:44369/api/Customer/Login', data, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }

  customerRegistration(e: custRegisterModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      cust_name: e.cust_name,
      cust_passwd: e.cust_passwd,
      cust_pin: e.cust_pin,
      cust_email: e.cust_email,
      cust_phno: e.cust_phno,
      cust_type_cd: e.custType.cust_type_cd
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
  //SUPPLIER----
  supplierlogin(e: supplierLoginModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      supplier_email: e.supplier_email,
      supplier_passwd: e.supplier_passwd
    };

    return this.http.post<any>('https://localhost:44369/api/Supplier/Login', data, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }

  supplierRegistration(e: supplierRegisterModel) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    const data = {
      supplier_name: e.supplier_name,
      supplier_address: e.supplier_address,
      supplier_gst_num: e.supplier_gst_num,
      reg_date: e.reg_date,
      pincode: e.pincode,
      supplier_type: e.ST.supplier_type,
      longtitude: e.longtitude,
      latitude: e.latitude,
      serv_pin_list: e.serv_pin_list,
      supplier_email: e.supplier_email,
      supplier_passwd: e.supplier_passwd,
    };

    return this.http.post<any>('https://localhost:44369/api/Supplier/Register', data, { headers: httpHeader }).pipe(
      map((d) => {
        return d;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );

  }

  getSupplierTypes() {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });

    return this.http.get<any>('https://localhost:44369/api/Supplier/GetAllSupplierType', { headers: httpHeader }).pipe(
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
