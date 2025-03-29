import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { supplierInfoModel } from '../../../../Models/supplierInfo'; 
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  id:any;
  constructor (private router:Router, private SupplierServ:SupplierService, private route:ActivatedRoute)
  {
    
  }
  ngOnInit(){

    //Get Supplier Type For DropDown
    this.SupplierServ.getSupplierTypes().subscribe(q=>{
      console.log(q);      
      this.supplierTypeList=q;
    });

    this.id=this.route.snapshot.paramMap.get('id')?.toString();
    
    console.log(this.id);
    if (this.id) 
    {
      this.SupplierServ.getSupplierInfobyId(this.id).subscribe(q=>{
      this.supplierInfoModelObj = q;
      this.supplierInfoModelObj.supplier_type=this.supplierInfoModelObj.ST.supplier_type;
      });
    }
  }
   onSubmit(form: NgForm) {
      console.log(this.supplierInfoModelObj);
  
      if (!form.invalid) {
        if(!this.id){
          this.supplierInfoModelObj.ST.supplier_type=this.supplierInfoModelObj.supplier_type;
          // API Call
          this.SupplierServ.registerSupplierInfo(this.supplierInfoModelObj).subscribe(q => {
            console.log('Updateed response', q);
    
            if (q && q.message === 'Supplier Info Successfully Registered!!') {
              alert('Supplier Info Successfully registered!!');
              this.router.navigate(['/supplierInfoList']);
            }
            else {
              alert('Supplier Info Failed to register!!');
            }
          })
        }        
        else{
          this.supplierInfoModelObj.ST.supplier_type=this.supplierInfoModelObj.supplier_type;
          // API Call
          this.SupplierServ.updateSupplierInfo(this.supplierInfoModelObj).subscribe(q => {
            console.log('Updateed response', q);
    
            if (q && q.message === 'Supplier Info Successfully Updated!!') {
              alert('Supplier Info Successfully updated!!');
              this.router.navigate(['/supplierInfoList']);
            }
            else {
              alert('Supplier Info Failed to be updated!!');
            }
          })

        }
      }
      else {
        // Navigate
        console.log('Error');
        //this.router.navigate(['/login']);
      }
  
    }

}
