import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../../../Service/Customer/customer.service';
import { foodTypeModel } from '../../../../../Models/foodType';
import { FoodService } from '../../../../../Service/Food/food.service';

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
  foodTypeModel: any = new foodTypeModel();
  id:any;

  constructor(private router: Router, private foodServ: FoodService, private route: ActivatedRoute) { }

  ngOnInit(){

    this.id=this.route.snapshot.paramMap.get('id')?.toString();
    
    console.log(this.id);
    if (this.id) 
    {
      this.foodServ.getFoodTypebyId(this.id).subscribe(q=>{
      this.foodTypeModel = q;
      this.foodTypeModel.isEdit = true;
      });
    }
  }

  onSubmit(form: NgForm) {
    console.log(this.foodTypeModel);

    if (!form.invalid) {
      if (this.foodTypeModel.isEdit == false) {
        // API Call
        this.foodServ.registerFoodType(this.foodTypeModel).subscribe(q => {
          console.log('Registered response', q);

          if (q && q.message === 'Food Type Successfully Registered!!') {
            alert("Food Type Successfully Registered!!!!!");
            this.router.navigate(['/foodTypeList']);
          }
          else {
            alert('Unable to Register!');
          }
        });
      }
      else {
        //updated response from update API call
        this.foodServ.updateFoodType(this.foodTypeModel).subscribe(q => {
          console.log('Updated response', q);

          if (q && q.message === 'Food Type Successfully Updated!!') {
            alert("Food Type Successfully Updated!!!!!");
            this.router.navigate(['/foodTypeList']);
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
