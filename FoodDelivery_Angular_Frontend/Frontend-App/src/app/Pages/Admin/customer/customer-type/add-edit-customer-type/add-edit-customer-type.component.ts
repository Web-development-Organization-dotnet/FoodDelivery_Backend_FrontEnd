import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../../../Service/Customer/customer.service';
import { custTypeModel } from '../../../../../Models/custType';

@Component({
  selector: 'app-add-edit-customer-type',
  standalone: true,
  imports: [
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
      FormsModule,
      CommonModule,
      RouterLink,
      RouterLinkActive
    ],
  templateUrl: './add-edit-customer-type.component.html',
  styleUrl: './add-edit-customer-type.component.css'
})
export class AddEditCustomerTypeComponent {
  custTypeModel: any = new custTypeModel();
  id:any;

  constructor(private router: Router, private custServ: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(){

    this.id=this.route.snapshot.paramMap.get('id')?.toString();
    
    console.log(this.id);
    // if (this.id) 
    // {
    //   this.custServ.getFoodTypebyId(this.id).subscribe(q=>{
    //   this.custTypeModel = q;
    //   this.custTypeModel.isEdit = true;
    //   });
    // }
  }

  onSubmit(form: NgForm) {
    console.log(this.custTypeModel);

    if (!form.invalid) {
      if (this.custTypeModel.isEdit == false) {
        // API Call
        this.custServ.registerCustomerType(this.custTypeModel).subscribe(q => {
          console.log('Registered response', q);

          if (q && q.message === 'Customer Type Successfully Registered!!') {
            alert("Customer Type Successfully Registered!!!!!");
            //this.router.navigate(['/custTypeList']);
          }
          else {
            alert('Unable to Register!');
          }
        });
      }
      // else {
      //   //updated response from update API call
      //   this.custServ.updateFoodType(this.custTypeModel).subscribe(q => {
      //     console.log('Updated response', q);

      //     if (q && q.message === 'Food Type Successfully Updated!!') {
      //       alert("Food Type Successfully Updated!!!!!");
      //       this.router.navigate(['/foodTypeList']);
      //     }
      //     else {
      //       alert('Unable to Update!');
      //     }
      //   });
      // }
    }
    else {
      // Navigate
      console.log('Error');
      //this.router.navigate(['/login']);
    }
  }

}
