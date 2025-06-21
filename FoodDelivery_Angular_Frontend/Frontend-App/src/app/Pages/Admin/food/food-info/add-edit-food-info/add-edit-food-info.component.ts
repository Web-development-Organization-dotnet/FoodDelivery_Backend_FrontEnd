import { Component, OnInit } from '@angular/core';
import { foodInfoModel } from '../../../../../Models/foodInfo';
import { foodTypeModel } from '../../../../../Models/foodType';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FoodService } from '../../../../../Service/Food/food.service';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';

@Component({
  selector: 'app-add-edit-food-info',
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
  templateUrl: './add-edit-food-info.component.html',
  styleUrls: ['./add-edit-food-info.component.css']
})
export class AddEditFoodInfoComponent implements OnInit {

  foodInfoModelObj: foodInfoModel = new foodInfoModel();
  foodTypeList: foodTypeModel[] = [];
  id: any;
  constructor(private router: Router, private FoodServ: FoodService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    //Get Supplier Type For DropDown
    this.FoodServ.getFoodTypes().subscribe(q => {
      console.log(q);
      this.foodTypeList = q;
    });

    this.id = this.route.snapshot.paramMap.get('id')?.toString();

    console.log(this.id);
    if (this.id) {
      this.FoodServ.getFoodInfobyId(this.id).subscribe(q => {
        this.foodInfoModelObj = q;
        this.foodInfoModelObj.foodType = this.foodInfoModelObj.foodType;
      });
    }
  }

  onSubmit(form: NgForm) {
    console.log(this.foodInfoModelObj);

    if (!form.invalid) {
      if (this.foodInfoModelObj.food_id === 0) {
        // API Call
        this.FoodServ.registerFoodInfo(this.foodInfoModelObj).subscribe(q => {
          console.log('Registered response', q);

          if (q === 'Food Info Successfully Added!!') {
            alert("Food Info Successfully Registered!!!!!");
            this.router.navigate(['/foodInfoList']);
          }
          else {
            alert('Unable to Register!');
          }
        });
      }
      else {
        //updated response from update API call
        this.FoodServ.updateFoodInfo(this.foodInfoModelObj).subscribe(q => {
          console.log('Updated response', q);

          if (q === 'Food Info Updated Successfully!!') {
            alert("Food Info Successfully Updated!!!!!");
            this.router.navigate(['/foodInfoList']);
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

  onFileChange(event: any) {
    alert(event.target.files[0].name);
  }

}
