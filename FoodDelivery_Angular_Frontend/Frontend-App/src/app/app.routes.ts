import { Routes } from '@angular/router';
import { UserloginComponent } from './Auth/userlogin/userlogin.component';
import { UserregisterComponent } from './Auth/userregister/userregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './Pages/Admin/my-account/my-account.component';
import { SupplierTypeComponent } from './Pages/Admin/supplier-type/supplier-type.component';

export const routes: Routes = [

  { path: '', component: UserloginComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'register', component: UserregisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adminMyAccount', component: MyAccountComponent },
  { path: 'supplierType', component: SupplierTypeComponent },
];
