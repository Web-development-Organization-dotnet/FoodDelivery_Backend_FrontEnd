import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginModel } from '../../Models/login';
import { LoginService } from '../../Service/Auth/login.service';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  loginModelObj:any=new loginModel(); //creating obj for loginModel class. Use 'any' for datatype independence

   constructor(private router: Router,private loginServ:LoginService){
    
  }
  ngOnInit(){

  }
  onSubmit(form:NgForm){
    console.log(form.invalid);
    console.log(this.loginModelObj);

    this.loginServ.login().subscribe(q=>{
      console.log('Login response',q);
    })

    // if(this.loginModelObj.username=="a@b.com" && this.loginModelObj.password=="123"){
    //   this.router.navigate(['/dashboard']);
    // }
    // else{
    //   return
    // }
  }
}

