import { Component } from '@angular/core';
import { FooterComponent } from '../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../_layout/header/header.component';
import { SidebarComponent } from '../../../_layout/sidebar/sidebar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supplierTypeModel } from '../../../Models/supplierType';
import { AdminService } from '../../../Service/Admin/admin.service';

@Component({
  selector: 'app-supplier-type',
  standalone: true,
  imports: [
    FooterComponent, 
    HeaderComponent, 
    SidebarComponent, 
    FormsModule, 
    CommonModule
  ],
  templateUrl: './supplier-type.component.html',
  styleUrl: './supplier-type.component.css'
})
export class SupplierTypeComponent {
  supplierTypeModel: any = new supplierTypeModel();

  constructor(private adminServ: AdminService) {

  }
  


onSubmit(form: NgForm) {
  // console.log(this.adminModelObj);

  // if (!form.invalid) {
  //   // API Call
  //   this.adminServ.updateAccountDetails(this.adminModelObj).subscribe(q => {
  //     console.log('Updateed response', q);

  //     // if (q && q.message === 'Update successful') {
  //     //   this.router.navigate(['/dashboard']);
  //     // }
  //     // else {
  //     //   alert('Invalid credentials!');
  //     // }
  //   })
  // }
  // else {
  //   // Navigate
  //   console.log('Error');
  //   //this.router.navigate(['/login']);
  // }

}
}