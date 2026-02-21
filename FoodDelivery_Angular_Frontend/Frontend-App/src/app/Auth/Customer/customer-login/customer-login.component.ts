import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { custLoginModel } from '../../../Models/custLogin';

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
      console.log(this.loginModelObj);
  
      if (!form.invalid) {
        // API Call
        this.loginServ.login(this.loginModelObj).subscribe(q => {
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
        this.router.navigate(['/login']);
      }
  
  
  
      // if(this.loginModelObj.username=="a@b.com" && this.loginModelObj.password=="123"){
      //   this.router.navigate(['/dashboard']);
      // }
      // else{
      //   return
      // }
    }

}
