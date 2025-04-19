import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { foodTypeModel } from '../../../../../Models/foodType';
import { FoodService } from '../../../../../Service/Food/food.service';

@Component({
  selector: 'app-add-edit-food-type',
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
  templateUrl: './add-edit-food-type.component.html',
  styleUrl: './add-edit-food-type.component.css'
})
export class AddEditFoodTypeComponent {
  foodTypeModel: any = new foodTypeModel();


  constructor(private router: Router, private foodServ: FoodService, private route: ActivatedRoute) { }

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

          if (q && q.message === 'Supplier Type Successfully Updated!!') {
            alert("Supplier Type Successfully Updated!!!!!");
            this.router.navigate(['/supplierType']);
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
