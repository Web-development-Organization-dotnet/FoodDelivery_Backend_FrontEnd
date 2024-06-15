import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Login } from '../../Models/login';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  loginModel:any= new Login();


   constructor(private router: Router){
    
  }
  ngOnInit(){

  }
  onSubmit(form:NgForm){
    console.log(this.loginModel);
    if(this.loginModel.username=="a@b.com" && this,this.loginModel.password=="123"){
      this,this.router.navigate(['/dashboard']);
    }
    else{
      return
    }
  }
}

