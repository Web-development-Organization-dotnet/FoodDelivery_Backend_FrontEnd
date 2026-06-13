import { Component } from '@angular/core';
import { FooterComponent } from '../../../../_layout/footer/footer.component';
import { HeaderComponent } from '../../../../_layout/header/header.component';
import { SidebarComponent } from '../../../../_layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-agent-wallet',
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
  templateUrl: './agent-wallet.component.html',
  styleUrl: './agent-wallet.component.css'
})
export class AgentWalletComponent {

}
