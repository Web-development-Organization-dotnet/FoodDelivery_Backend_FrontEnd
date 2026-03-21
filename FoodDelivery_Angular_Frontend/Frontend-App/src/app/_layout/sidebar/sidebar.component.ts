import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import menuData from '../../StaticData/menu.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
   // Example role (can come from login/session/API)
  currentRole: string = ""; // Change this to "Admin", "Agent", "Customer", or "Supplier" to test different views
  
  // Full menu from JSON
  allMenus: any[] = menuData;

  // Filtered menu for UI
  filteredMenus: any[] = [];

  ngOnInit(): void {
    const user = this.getUserData();
    this.currentRole = user?.role;
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
  getUserData(): any | null {
  try {
    const data = localStorage.getItem('userDetails');
    return data ? JSON.parse(data) as any : null;
  } catch (error) {
    console.error('Error parsing localStorage data', error);
    return null;
  }
}
}
