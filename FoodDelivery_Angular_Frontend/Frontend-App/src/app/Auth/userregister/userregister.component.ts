import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { registerModel } from '../../Models/register';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Service/Auth/auth.service';

@Component({
  selector: 'app-userregister',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})

export class UserregisterComponent {
  registerModelObj: any = new registerModel();

  constructor(private router: Router, private regServ: AuthService) {

  }

  onSubmit(form: NgForm) {
    console.log("registerModelObj: ", this.registerModelObj);

    if (!form.invalid) {
      // API Call
      this.regServ.registration(this.registerModelObj).subscribe(q => {
        console.log('Registration response', q);

        if (q && q.message === 'Registration Successful') {
          alert('Registration Successful');
          this.router.navigate(['/login']);
        }
        else {
          alert('Unable to register!');
        }
      })
    }
    else {
      // Navigate
      console.log('Error');
      this.router.navigate(['/registration']);
    }
  }
}
