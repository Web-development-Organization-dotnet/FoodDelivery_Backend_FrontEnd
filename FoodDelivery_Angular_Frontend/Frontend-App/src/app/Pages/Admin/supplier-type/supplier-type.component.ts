import { Component } from '@angular/core';
import { FooterComponent } from '../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../_layout/header/header.component';
import { SidebarComponent } from '../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supplierTypeModel } from '../../../Models/supplierType';
import { AdminService } from '../../../Service/Admin/admin.service';
import { SupplierService } from '../../../Service/Supplier/supplier.service';
import { Router } from '@angular/router';
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
    DataTablesModule
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
  


onSubmit(form: NgForm) {
   console.log(this.supplierTypeModel);

  if (!form.invalid) {
    // API Call
    this.supplierServ.registerSupplierType(this.supplierTypeModel).subscribe(q => {
      console.log('Registered response', q);

      if (q && q.message === 'Supplier Type Successfully Registered!!') {
        alert("Supplier Type Successfully Registered!!!!!");
        this.router.navigate(['/dashboard']);
      }
      else {
        alert('Unable to Register!');
      }
    })
  }
  else {
    // Navigate
    console.log('Error');
    //this.router.navigate(['/login']);
  }

}
ngOnInit():void{
  this.supplierServ.getSupplierTypes().subscribe(q=>{
    this.datatablesource=q;
    this.dtTrigger.next(null);
  });
  this.dtOptions={
    pagingType: 'full_numbers'
  }
}
}