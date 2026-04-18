import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../Service/Auth/auth.service';
import { supplierLoginModel } from '../../../Models/supplierLogin';

@Component({
  selector: 'app-supplier-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './supplier-login.component.html',
  styleUrl: './supplier-login.component.css'
})
export class SupplierLoginComponent {

  supplierloginModelObj: any = new supplierLoginModel(); //creating obj for loginModel class. Use 'any' for datatype independence

  constructor(private router: Router, private loginServ: AuthService) {
    
      }
ngOnInit() {
  
    }
  
    onSubmit(form: NgForm) {
  
      console.log(form.invalid);
      console.log(this.supplierloginModelObj);
  
      if (!form.invalid) {
        // API Call
        this.loginServ.custlogin(this.supplierloginModelObj).subscribe(q => {
          console.log('Login response', q);
  
          if (q && q.message === 'Login successful') {
            //set value in local storage
            
            localStorage.setItem('userDetails',JSON.stringify(q));
            this.router.navigate(['/dashboard']);
          }
          else {
            alert('Invalid credentials!');
          }
        })
      }
      else {
        // Navigate
        console.log('Error');
        this.router.navigate(['/supplier/login']);
      }
  
  
  
      // if(this.loginModelObj.username=="a@b.com" && this.loginModelObj.password=="123"){
      //   this.router.navigate(['/dashboard']);
      // }
      // else{
      //   return
      // }
    }

}

