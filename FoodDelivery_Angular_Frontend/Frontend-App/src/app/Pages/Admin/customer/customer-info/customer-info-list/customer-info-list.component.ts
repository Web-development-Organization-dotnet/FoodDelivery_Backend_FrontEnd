import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';

import { DataTablesModule } from 'angular-datatables';
import { custInfoModel } from '../../../../../Models/customerInfo';
import { CustomerService } from '../../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-customer-info-list',
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
  templateUrl: './customer-info-list.component.html',
  styleUrl: './customer-info-list.component.css'
})
export class CustomerInfoListComponent {
custinfoModel: any = new custInfoModel();
  datatablesource: any;
  title = 'angulardatatables';
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private custService: CustomerService) {
    this.datatablesource = []
  }

  ngOnInit(): void {
    this.custService.getAllCustomerInfo().subscribe(q => {
      this.datatablesource = q;
      console.log(q);
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
}
