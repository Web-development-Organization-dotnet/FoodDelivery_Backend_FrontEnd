import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { supplierRegisterModel } from '../../../Models/supplierRegister';
import { AuthService } from '../../../Service/Auth/auth.service';
import { supplierTypeModel } from '../../../Models/supplierType';

@Component({
  selector: 'app-supplier-register',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './supplier-register.component.html',
  styleUrl: './supplier-register.component.css'
})
export class SupplierRegisterComponent {supplierRegisterModelObj: any = new supplierRegisterModel();
  supplierTypeList: supplierTypeModel[] = [];

  todayDate: string = new Date().toISOString().split('T')[0];

  constructor(private router: Router, private regServ: AuthService) {
  }


  ngOnInit() {
    //Get Supplier Type For DropDown
    this.regServ.getSupplierTypes().subscribe(q => {
      console.log(q);
      this.supplierTypeList = q;
    });
  }

  onSubmit(form: NgForm) {
    console.log("supplierRegisterModelObj: ", this.supplierRegisterModelObj);
    
    if (!form.invalid) {
      // API Call
      //this.agentregisterModelObj.name = this.agentregisterModelObj.agentname
      this.regServ.supplierRegistration(this.supplierRegisterModelObj).subscribe(q => {
        console.log('Registration response', q);

        if (q && q.message === 'Supplier Registration Successful') {
          alert('Registration Successful');
          this.router.navigate(['supplier/login']);
        }
        else {
          alert('Unable to register!');
        }
      })
    }
    else {
      // Navigate
      console.log('Error');
      this.router.navigate(['supplier/register']);
    }
  }
}

