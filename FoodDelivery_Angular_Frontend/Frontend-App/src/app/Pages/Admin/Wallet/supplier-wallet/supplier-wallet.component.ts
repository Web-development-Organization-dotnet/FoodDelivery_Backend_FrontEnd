import { Component } from '@angular/core';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { supplierWalletModel } from '../../../../Models/supplierWallet';
import { supplierInfoModel } from '../../../../Models/supplierInfo';
import { SupplierService } from '../../../../Service/Supplier/supplier.service';

@Component({
  selector: 'app-supplier-wallet',
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
  templateUrl: './supplier-wallet.component.html',
  styleUrl: './supplier-wallet.component.css'
})
export class SupplierWalletComponent {


  supplierWalletModelObj:supplierWalletModel=new supplierWalletModel();
    supplierInfoList:supplierInfoModel[]=[];
    id:any;
    constructor (private router:Router, private SupplierServ:SupplierService, private route:ActivatedRoute)
    {
      
    }
    ngOnInit(){
  
      //Get Supplier Type For DropDown
      this.SupplierServ.getAllSupplierInfo().subscribe(q=>{
        console.log(q);      
        this.supplierInfoList=q;
      });
  
      this.id=this.route.snapshot.paramMap.get('id')?.toString();
      
      console.log(this.id);
      if (this.id) 
      {
        this.SupplierServ.getSupplierWalletInfobyId(this.id).subscribe(q=>{
        this.supplierWalletModelObj = q;
        //this.supplierWalletModelObj.supplier_name=this.supplierWalletModelObj.SI.supplier_name;
        });
      }
    }
    //  onSubmit(form: NgForm) {
    //     console.log(this.supplierWalletModelObj);
    
    //     if (!form.invalid) {
    //       if(!this.id){
    //         this.supplierWalletModelObj.SI.supplier_id=this.supplierWalletModelObj.supplier_id;
    //         // API Call
    //         this.SupplierServ.registerSupplierInfo(this.supplierWalletModelObj).subscribe(q => {
    //           console.log('Updateed response', q);
      
    //           if (q && q.message === 'Supplier Info Successfully Registered!!') {
    //             alert('Supplier Info Successfully registered!!');
    //             this.router.navigate(['/supplierInfoList']);
    //           }
    //           else {
    //             alert('Supplier Info Failed to register!!');
    //           }
    //         })
    //       }        
    //       else{
    //         this.supplierInfoModelObj.ST.supplier_type=this.supplierInfoModelObj.supplier_type;
    //         // API Call
    //         this.SupplierServ.updateSupplierInfo(this.supplierInfoModelObj).subscribe(q => {
    //           console.log('Updateed response', q);
      
    //           if (q && q.message === 'Supplier Info Successfully Updated!!') {
    //             alert('Supplier Info Successfully updated!!');
    //             this.router.navigate(['/supplierInfoList']);
    //           }
    //           else {
    //             alert('Supplier Info Failed to be updated!!');
    //           }
    //         })
  
    //       }
    //     }
    //     else {
    //       // Navigate
    //       console.log('Error');
    //       //this.router.navigate(['/login']);
    //     }
    
    //   }

}
