import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-supplier-register',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './supplier-register.component.html',
  styleUrl: './supplier-register.component.css'
})
export class SupplierRegisterComponent {

}
