import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FoodService } from '../../../../../Service/Food/food.service';
import { foodInfoModel } from '../../../../../Models/foodInfo';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-food-info-list',
  standalone: true,
  imports: [
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
      FormsModule,
      CommonModule,
      DataTablesModule,
      RouterLink,
      RouterLinkActive,
      NgImageSliderModule
    ],
  templateUrl: './food-info-list.component.html',
  styleUrl: './food-info-list.component.css'
})
export class FoodInfoListComponent {
    foodTypeModel: any = new foodInfoModel();
    datatablesource: any;
    title = 'angulardatatables';
    dtOptions: Config = {};
    dtTrigger: Subject<any> = new Subject();
    imgobject: Array <object> = [];

  constructor(private router: Router, private foodService: FoodService) {
      this.datatablesource = []
    }

ngOnInit(): void {
    this.foodService.getAllFoodInfo().subscribe(q => {
      q = this.setImages(q);
      this.datatablesource = q;
      console.log(q);
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
 setImages(datasource: any): any {
  datasource.forEach((element: any) => {
    const images = element.food_img_paths.map((img: any) => ({
      image: img,
      thumbImage: img,
      alt: 'alt of image',
      title: 'title'
    }));
    element.imageCaraousal = images;
  });
  return datasource;
}
}
