import { Component, OnInit } from '@angular/core';
import { foodInfoModel } from '../../../../../Models/foodInfo';
import { foodTypeModel } from '../../../../../Models/foodType';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FoodService } from '../../../../../Service/Food/food.service';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

   foodInfoModelObj:foodInfoModel=new foodInfoModel();
    foodTypeList:foodTypeModel[]=[];
    id:any;
    constructor (private router:Router, private FoodServ:FoodService, private route:ActivatedRoute)
    {
      
    }

  ngOnInit() {
    

    //Get Supplier Type For DropDown
    this.FoodServ.getFoodTypes().subscribe(q=>{
      console.log(q);      
      this.foodTypeList=q;
    });

    this.id=this.route.snapshot.paramMap.get('id')?.toString();
    
    console.log(this.id);
    if (this.id) 
    {
      this.FoodServ.getFoodInfobyId(this.id).subscribe(q=>{
      this.foodInfoModelObj = q;
      this.foodInfoModelObj.foodType=this.foodInfoModelObj.foodType;
      });
    }
  }

}
