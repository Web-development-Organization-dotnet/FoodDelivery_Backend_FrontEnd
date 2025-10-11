import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { custTypeModel } from '../../../../../Models/custType';
import { CustomerService } from '../../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-customer-type-list',
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
  templateUrl: './customer-type-list.component.html',
  styleUrl: './customer-type-list.component.css'
})
export class CustomerTypeListComponent {
custTypeModel: any = new custTypeModel();
  datatablesource: any;
  title = 'angulardatatables';
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private custService: CustomerService) {
    this.datatablesource = []
  }




  ngOnInit(): void {
    this.custService.getCustomerTypes().subscribe(q => {
      this.datatablesource = q;
      console.log(q);
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
}
