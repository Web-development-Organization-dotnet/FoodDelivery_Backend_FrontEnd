import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supplierTypeModel } from '../../../../../Models/supplierType';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../../../Service/Supplier/supplier.service';

@Component({
  selector: 'app-supplier-type-entry',
  standalone: true,
  imports: [
    FooterComponent, 
    HeaderComponent, 
    SidebarComponent, 
    FormsModule, 
    CommonModule
  ],
  templateUrl: './supplier-type-entry.component.html',
  styleUrl: './supplier-type-entry.component.css'
})
export class SupplierTypeEntryComponent {
  supplierTypeModel: any = new supplierTypeModel();
  

  constructor(private router: Router, private supplierServ: SupplierService, private route:ActivatedRoute) {}
  
    ngOnInit():void{
      const id=this.route.snapshot.paramMap.get('id')?.toString();
      console.log(id);
      if (id) 
      {
        this.supplierServ.getSupplierTypebyId(id).subscribe(q=>{
        this.supplierTypeModel = q;
        });
      }
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
}
