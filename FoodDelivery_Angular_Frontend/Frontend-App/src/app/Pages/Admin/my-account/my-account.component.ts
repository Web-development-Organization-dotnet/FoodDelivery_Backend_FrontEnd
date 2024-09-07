import { Component } from '@angular/core';
import { FooterComponent } from "../../../_layout/footer/footer.component";
import { HeaderComponent } from "../../../_layout/header/header.component";
import { SidebarComponent } from "../../../_layout/sidebar/sidebar.component";
import { AdminInfoModel } from '../../../Models/adminInfo';
import { AdminService } from '../../../Service/Admin/admin.service';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})

export class MyAccountComponent {
  adminModelObj: any = new AdminInfoModel();

  constructor(private adminServ: AdminService) {

  }

  ngOnInit() {
    // API Call
    this.adminServ.getAccountDetails(101).subscribe(q => {
      console.log('Login response', q);

      if (q && q.message === 'Login successful') {
        // this.router.navigate(['/dashboard']);
        console.log(q);
        alert(q.name);
      }
      else {
        alert('Invalid credentials!');
      }
    })
  }

}
