import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { supplierInfoModel } from '../../../../Models/supplierInfo'; 
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { supplierTypeModel } from '../../../../Models/supplierType';
import { SupplierService } from '../../../../Service/Supplier/supplier.service';

@Component({
  selector: 'app-add-edit-supplier-info',
  standalone: true,
  imports: [
            HeaderComponent,
            SidebarComponent,
            FooterComponent,
            FormsModule,
            RouterLink,
            RouterLinkActive,
            CommonModule

  ],
  templateUrl: './add-edit-supplier-info.component.html',
  styleUrl: './add-edit-supplier-info.component.css'
})
export class AddEditSupplierInfoComponent {

  supplierInfoModelObj:supplierInfoModel=new supplierInfoModel();
  supplierTypeList:supplierTypeModel[]=[];
  constructor (private router:Router, private SupplierServ:SupplierService)
  {
    
  }
  ngOnInit(){
    this.SupplierServ.getSupplierTypes().subscribe(q=>{
      console.log(q);
      
      this.supplierTypeList=q;


    })
  }
   onSubmit(form: NgForm) {
  //     console.log(this.adminModelObj);
  
  //     if (!form.invalid) {
  //       // API Call
  //       this.adminServ.updateAccountDetails(this.adminModelObj).subscribe(q => {
  //         console.log('Updateed response', q);
  
  //         // if (q && q.message === 'Update successful') {
  //         //   this.router.navigate(['/dashboard']);
  //         // }
  //         // else {
  //         //   alert('Invalid credentials!');
  //         // }
  //       })
  //     }
  //     else {
  //       // Navigate
  //       console.log('Error');
  //       //this.router.navigate(['/login']);
  //     }
  
    }

}
