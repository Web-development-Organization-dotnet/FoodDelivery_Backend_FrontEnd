import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../../../Service/Customer/customer.service';
import { custInfoModel } from '../../../../../Models/custInfo';
import { custTypeModel } from '../../../../../Models/custType';

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
export class AddEditCustomerInfoComponent implements OnInit {

  custInfoModelObj: custInfoModel = new custInfoModel();
  custTypeList: custTypeModel[] = [];
  id: any;
  constructor(private router: Router, private CustServ: CustomerService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    //Get Supplier Type For DropDown
    this.CustServ.getCustomerTypes().subscribe(q => {
      console.log(q);
      this.custTypeList = q;
    });

    this.id = this.route.snapshot.paramMap.get('id')?.toString();

    console.log(this.id);
    if (this.id) {
      this.CustServ.getCustomerInfobyId(this.id).subscribe(q => {
        console.log(q);
        this.custInfoModelObj = q;
        this.custInfoModelObj.custType = this.custInfoModelObj.custType;
      });
    }
  }

  onSubmit(form: NgForm) {
    console.log(this.custInfoModelObj);

    if (!form.invalid) {
      if (this.custInfoModelObj.cust_id === 0) {
        // API Call
        this.CustServ.registerCustomerInfo(this.custInfoModelObj).subscribe(q => {
          console.log('Registered response', q);

          if (q.message === 'Customer Info Successfully Registered!!') {
            alert("Customer Info Successfully Registered!!");
            this.router.navigate(['/custInfoList']);
          }
          else if (q.message === 'This phone number already exists!!')
          {
            alert("This phone number already exists!!");
          }
          else {
            alert('Unable to Register!');
          }
        });
      }
      else {
        //updated response from update API call
        this.CustServ.updateCustomerInfo(this.custInfoModelObj).subscribe(q => {
          console.log('Updated response', q);

          if (q === 'Customer Information Updated Successfully!!') {
            alert("Customer Information Updated Successfully!!");
            this.router.navigate(['/custInfoList']);
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
