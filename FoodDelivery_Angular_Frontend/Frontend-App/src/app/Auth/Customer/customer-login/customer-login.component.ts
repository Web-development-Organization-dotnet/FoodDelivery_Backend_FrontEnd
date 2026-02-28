import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { custLoginModel } from '../../../Models/custLogin';
import { AuthService } from '../../../Service/Auth/auth.service';

@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent {

  custloginModelObj: any = new custLoginModel(); //creating obj for loginModel class. Use 'any' for datatype independence
  
    constructor(private router: Router, private loginServ: AuthService) {
  
    }
  
    ngOnInit() {
  
    }
  
    onSubmit(form: NgForm) {
  
      console.log(form.invalid);
      console.log(this.custloginModelObj);
  
      if (!form.invalid) {
        // API Call
        this.loginServ.custlogin(this.custloginModelObj).subscribe(q => {
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
        this.router.navigate(['/customer/login']);
      }
  
  
  
      // if(this.loginModelObj.username=="a@b.com" && this.loginModelObj.password=="123"){
      //   this.router.navigate(['/dashboard']);
      // }
      // else{
      //   return
      // }
    }

}
