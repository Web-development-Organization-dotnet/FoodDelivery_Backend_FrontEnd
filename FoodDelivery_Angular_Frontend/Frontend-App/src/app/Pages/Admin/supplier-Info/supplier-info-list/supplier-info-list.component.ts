import { Component } from '@angular/core';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { SupplierService } from '../../../../Service/Supplier/supplier.service';
import { supplierInfoModel } from '../../../../Models/supplierInfo';

@Component({
  selector: 'app-supplier-info-list',
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
  templateUrl: './supplier-info-list.component.html',
  styleUrl: './supplier-info-list.component.css'
})
export class SupplierInfoListComponent {
  supplierInfoModel: any = new supplierInfoModel();
  datatablesource: any;
  title = 'angulardatatables';
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private supplierServ: SupplierService) {
  this.datatablesource = []
  }

  ngOnInit(): void {
    this.supplierServ.getAllSupplierInfo().subscribe(q=> {
      this.datatablesource = q;
      console.log(q);
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
}
