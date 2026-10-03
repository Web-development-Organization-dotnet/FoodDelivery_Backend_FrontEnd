import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LandingService } from '../../Service/Landing/landing.service';
import { supplierByFoodTypeModel } from '../../Models/supplierByFoodType';

@Component({
  selector: 'app-landing-foodtype',
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
  templateUrl: './landing-foodtype.component.html',
  styleUrl: './landing-foodtype.component.css'
})
export class LandingFoodtypeComponent {
  searchTerm = 'Pizza';
  resultCount = 24;
  foodTypeId = 'IC-DE';

  quickFilters = ['Fast delivery', 'Top rated', 'Pure Veg', 'Offers', 'Open now', '₹300-₹500'];

  restaurants = [
    {
      name: 'Pizza Palace',
      cuisine: 'Pizza, Italian, Pasta',
      rating: 4.8,
      eta: '25-30 min',
      price: '₹399 for two',
      delivery: 'Free delivery above ₹199',
      offer: '20% OFF',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Firestone Pizzeria',
      cuisine: 'Cheese Burst, Hand Tossed',
      rating: 4.7,
      eta: '30-35 min',
      price: '₹450 for two',
      delivery: 'Delivery in 32 mins',
      offer: 'Free Garlic Bread',
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Basil & Brick',
      cuisine: 'Pizza, Wraps, Desserts',
      rating: 4.6,
      eta: '35-40 min',
      price: '₹520 for two',
      delivery: 'Freshly baked',
      offer: 'Combo Saver',
      image: 'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Domino Delights',
      cuisine: 'Pizza, Pastas, Garlic Knots',
      rating: 4.9,
      eta: '20-25 min',
      price: '₹380 for two',
      delivery: 'Comfort delivery',
      offer: 'Pizza + Drink',
      image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d7f5d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Slice & Sip',
      cuisine: 'Pizza, Mocktails, Sides',
      rating: 4.5,
      eta: '28-33 min',
      price: '₹430 for two',
      delivery: 'No-contact delivery',
      offer: 'Buy 1 Get 1',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Crust Corner',
      cuisine: 'Thin Crust, Sides, Beverages',
      rating: 4.8,
      eta: '22-28 min',
      price: '₹410 for two',
      delivery: 'Best seller',
      offer: 'Flat ₹80 OFF',
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=800&q=80'
    }
  ];

  supplierByFoodTypeModel: supplierByFoodTypeModel[] = [];

  constructor(private router: Router, private landingServ: LandingService) {

  }

  ngOnInit(): void {
    this.landingServ.getSupplierByFoodType(this.foodTypeId).subscribe(q => {
      console.log(q);


      this.supplierByFoodTypeModel = q;

      //Image addition harcode
      this.supplierByFoodTypeModel = q.map((item: any) => ({
        ...item,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
      }));
      console.log(q);

    });

  }
}
