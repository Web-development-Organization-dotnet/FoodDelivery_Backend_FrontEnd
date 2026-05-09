import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../Service/Auth/auth.service';
import { custRegisterModel } from '../../../Models/custRegister';
import { custTypeModel } from '../../../Models/custType';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent {

  custRegisterModelObj: any = new custRegisterModel();
  custTypeList: custTypeModel[] = [];

  constructor(private router: Router, private regServ: AuthService) {
  }


  ngOnInit() {
    //Get Supplier Type For DropDown
    this.regServ.getCustomerTypes().subscribe(q => {
      console.log(q);
      this.custTypeList = q;
    });
  }

  onSubmit(form: NgForm) {
    console.log("custRegisterModelObj: ", this.custRegisterModelObj);
    
    if (!form.invalid) {
      // API Call
      //this.agentregisterModelObj.name = this.agentregisterModelObj.agentname
      this.regServ.customerRegistration(this.custRegisterModelObj).subscribe(q => {
        console.log('Registration response', q);

        if (q && q.message === 'Customer Registration Successful') {
          alert('Registration Successful');
          this.router.navigate(['customer/login']);
        }
        else {
          alert('Unable to register!');
        }
      })
    }
    else {
      // Navigate
      console.log('Error');
      this.router.navigate(['customer/register']);
    }
  }
}
