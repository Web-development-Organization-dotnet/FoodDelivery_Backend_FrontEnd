import { Component, ViewChild, viewChild } from '@angular/core';
import { user_registration } from '../Model/registration';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
_userregistration:user_registration;
@ViewChild('RegistrationForm')
RegistrationForm !: NgForm;
constructor(){
  this._userregistration=new user_registration();
}

ngOnInit():void{

}
onSubmit(){
  console.log(this._userregistration);
}

}
