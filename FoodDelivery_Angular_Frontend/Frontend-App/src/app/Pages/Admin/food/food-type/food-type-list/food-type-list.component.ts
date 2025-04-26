import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { foodTypeModel } from '../../../../../Models/foodType';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { FoodService } from '../../../../../Service/Food/food.service';

@Component({
  selector: 'app-food-type-list',
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
  ],
  templateUrl: './food-type-list.component.html',
  styleUrl: './food-type-list.component.css'
})
export class FoodTypeListComponent {
  foodTypeModel: any = new foodTypeModel();
  datatablesource: any;
  title = 'angulardatatables';
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private foodService: FoodService) {
    this.datatablesource = []
  }




  ngOnInit(): void {
    this.foodService.getFoodTypes().subscribe(q => {
      this.datatablesource = q;
      console.log(q);
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
}
