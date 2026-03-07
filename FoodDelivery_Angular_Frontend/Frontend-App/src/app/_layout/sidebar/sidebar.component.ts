import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import menuData from '../../StaticData/menu.json';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
   // Example role (can come from login/session/API)
  currentRole: string = 'Supplier'; // Change this to "Admin", "Agent", "Customer", or "Supplier" to test different views

  // Full menu from JSON
  allMenus: any[] = menuData;

  // Filtered menu for UI
  filteredMenus: any[] = [];

  ngOnInit(): void {
    this.filteredMenus = this.filterMenuByRole(this.allMenus);
    console.log('Filtered Menus for Role:', this.currentRole, this.filteredMenus);
  }

  filterMenuByRole(menus: any[]): any[] {
    return menus
      .filter(menu => menu.roles.includes(this.currentRole))
      .map(menu => {
        return {
          ...menu,
          children: menu.children ? this.filterMenuByRole(menu.children) : []
        };
      });
  }
}
