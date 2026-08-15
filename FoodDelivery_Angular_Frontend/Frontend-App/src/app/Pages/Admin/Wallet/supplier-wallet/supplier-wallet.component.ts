import { Component } from '@angular/core';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SupplierService } from '../../../../Service/Supplier/supplier.service';
import { supplierWalletModel } from '../../../../Models/supplierWallet';
import { supplierInfoModel } from '../../../../Models/supplierInfo';

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
    supplierNameList:supplierInfoModel[]=[];
    id:any;
    constructor (private router:Router, private SupplierServ:SupplierService, private route:ActivatedRoute)
    {
      
    }
    ngOnInit(){
  
      //Get Supplier Type For DropDown
      this.SupplierServ.getAllSupplierInfo().subscribe(q=>{
        console.log(q);      
        this.supplierNameList=q;
      });
  
      this.id=this.route.snapshot.paramMap.get('id')?.toString();
      
      console.log(this.id);
      if (this.id) 
      {
        this.SupplierServ.GetSupplierWalletInfoById(this.id).subscribe(q=>{
        this.supplierWalletModelObj = q;
        this.supplierWalletModelObj.supplier_name=this.supplierWalletModelObj.SI.supplier_name;
        });
      }
    }
     onSubmit(form: NgForm) {
        console.log(this.supplierWalletModelObj);

          if (!form.invalid) {
            this.supplierWalletModelObj.SI.supplier_name=this.supplierWalletModelObj.supplier_name;
            // API Call
            this.SupplierServ.UpdateSupplierWallet(this.supplierWalletModelObj).subscribe(q => {
              console.log('Updated response', q);
      
              if (q && q.message === 'Amount added to your Supplier Wallet successfully!!') {
                alert('Amount added to your Supplier Wallet successfully!!');
                this.router.navigate(['/supplierInfoList']);
              }
              else {
                alert('Failed to add amount to your Supplier Wallet!!');
              }
            })
  
          }
        else {
          // Navigate
          console.log('Error');
          //this.router.navigate(['/login']);
        }
    
      }

}
