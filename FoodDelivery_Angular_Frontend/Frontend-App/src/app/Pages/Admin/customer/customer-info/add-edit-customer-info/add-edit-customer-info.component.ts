import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { custTypeModel } from '../../../../../Models/custType';
import { CustomerService } from '../../../../../Service/Customer/customer.service';
import { custInfoModel } from '../../../../../Models/customerInfo';

@Component({
  selector: 'app-add-edit-customer-info',
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
  templateUrl: './add-edit-customer-info.component.html',
  styleUrl: './add-edit-customer-info.component.css'
})
export class AddEditCustomerInfoComponent {

  custInfoobj: any = new custInfoModel();
    id:any;
  
    constructor(private router: Router, private custServ: CustomerService, private route: ActivatedRoute) { }
  
    ngOnInit(){
  
      this.id=this.route.snapshot.paramMap.get('id')?.toString();
      
      console.log(this.id);
      if (this.id) 
      {
        this.custServ.getCustomerTypebyId(this.id).subscribe(q=>{
        this.custInfoobj = q;
        this.custInfoobj.isEdit = true;
        });
      }
    }
  
    onSubmit(form: NgForm) {
      console.log(this.custInfoobj);
  
      if (!form.invalid) {
        if (this.custInfoobj.isEdit == false) {
          // API Call
          this.custServ.registerCustomerType(this.custInfoobj).subscribe(q => {
            console.log('Registered response', q);
  
            if (q && q.message === 'Customer Type Successfully Registered!!') {
              alert("Customer Type Successfully Registered!!");
              this.router.navigate(['/custTypeList']);
            }
            else {
              alert('Unable to Register!');
            }
          });
        }
        else {
          //updated response from update API call
          this.custServ.updateCustomerType(this.custInfoobj).subscribe(q => {
            console.log('Updated response', q);
  
            if (q && q.message === 'Customer Type Successfully Updated!!') {
              alert("Customer Type Successfully Updated!!!!!");
              this.router.navigate(['/custTypeList']);
            }
            else {
              alert('Unable to Update!');
            }
          });
        }
      }
      else {
        // Navigate
        console.log('Error');
        //this.router.navigate(['/login']);
      }
    }
}
