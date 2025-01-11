import { Component } from '@angular/core';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supplierTypeModel } from '../../../../Models/supplierType';
import { AdminService } from '../../../../Service/Admin/admin.service';
import { SupplierService } from '../../../../Service/Supplier/supplier.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import {Subject} from 'rxjs';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-supplier-type',
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
  templateUrl: './supplier-type.component.html',
  styleUrl: './supplier-type.component.css'
})
export class SupplierTypeComponent {
  supplierTypeModel: any = new supplierTypeModel();
  datatablesource: any;
  title = 'angulardatatables';
  dtOptions: Config= {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private supplierServ: SupplierService) {
  this.datatablesource = []
  }
  



ngOnInit():void{
  this.supplierServ.getSupplierTypes().subscribe(q=>{
    var maxTunOver:number;
    maxTunOver=Math.max(...q.map((item: any) => item.yearly_turnover))
    var eachPercent:number;
    eachPercent=maxTunOver/100;
    q.forEach((element:any) => {
      var progPercent:number=element.yearly_turnover/eachPercent;
      element.individualPercent=progPercent;
    });
    this.datatablesource=q;
    console.log(q);
    this.dtTrigger.next(null);
  });
  this.dtOptions={
    pagingType: 'full_numbers'
  }
}
}