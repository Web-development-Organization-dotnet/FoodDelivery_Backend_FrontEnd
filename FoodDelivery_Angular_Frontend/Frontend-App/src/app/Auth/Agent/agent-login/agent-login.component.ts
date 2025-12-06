import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { loginModel } from '../../../Models/login';
import { agentLoginModel } from '../../../Models/agentLogin';
import { AuthService } from '../../../Service/Auth/auth.service';

@Component({
  selector: 'app-agent-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './agent-login.component.html',
  styleUrl: './agent-login.component.css'
})
export class AgentLoginComponent {

  agentLoginModelObj: any = new agentLoginModel(); //creating obj for loginModel class. Use 'any' for datatype independence
  
  constructor(private router: Router, private agentLoginServ: AuthService) {
  
    }
ngOnInit() {

  }

  onSubmit(form: NgForm) {

    console.log(form.invalid);
    console.log(this.agentLoginModelObj);

    if (!form.invalid) {
      // API Call
      this.agentLoginServ.agentlogin(this.agentLoginModelObj).subscribe(q => {
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
      this.router.navigate(['/agentlogin']);
    }



    // if(this.loginModelObj.username=="a@b.com" && this.loginModelObj.password=="123"){
    //   this.router.navigate(['/dashboard']);
    // }
    // else{
    //   return
    // }
  }

}
