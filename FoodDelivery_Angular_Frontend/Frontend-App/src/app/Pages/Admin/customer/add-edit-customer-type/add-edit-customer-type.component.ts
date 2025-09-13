import { Component } from '@angular/core';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-add-edit-customer-type',
  standalone: true,
  imports: [
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
      FormsModule,
      CommonModule,
      RouterLink,
      RouterLinkActive
    ],
  templateUrl: './add-edit-customer-type.component.html',
  styleUrl: './add-edit-customer-type.component.css'
})
export class AddEditCustomerTypeComponent {

  constructor(private router: Router, private foodServ: CustomerService, private route: ActivatedRoute) { }

}
