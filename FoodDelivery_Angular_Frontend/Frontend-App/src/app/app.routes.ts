import { Routes } from '@angular/router';
import { UserloginComponent } from './Auth/Admin/userlogin/userlogin.component';
import { UserregisterComponent } from './Auth/Admin/userregister/userregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './Pages/Admin/my-account/my-account.component';
import { SupplierTypeComponent } from './Pages/Admin/supplier-type/SupplierTypeList/supplier-type.component';
import { SupplierTypeEntryComponent } from './Pages/Admin/supplier-type/AddEditSupplier/supplier-type-entry/supplier-type-entry.component';
import { AddEditSupplierInfoComponent } from './Pages/Admin/supplier-Info/add-edit-supplier-info/add-edit-supplier-info.component';
import { SupplierInfoListComponent } from './Pages/Admin/supplier-Info/supplier-info-list/supplier-info-list.component';
import { FoodTypeListComponent } from './Pages/Admin/food/food-type/food-type-list/food-type-list.component';
import { AddEditFoodTypeComponent } from './Pages/Admin/food/food-type/add-edit-food-type/add-edit-food-type.component';
import { FoodInfoListComponent } from './Pages/Admin/food/food-info/food-info-list/food-info-list.component';
import { AddEditFoodInfoComponent } from './Pages/Admin/food/food-info/add-edit-food-info/add-edit-food-info.component';
import { AddEditCustomerTypeComponent } from './Pages/Admin/customer/customer-type/add-edit-customer-type/add-edit-customer-type.component';
import { CustomerTypeListComponent } from './Pages/Admin/customer/customer-type/customer-type-list/customer-type-list.component';
import { AddEditCustomerInfoComponent } from './Pages/Admin/customer/customer-info/add-edit-customer-info/add-edit-customer-info.component';
import { CustomerInfoListComponent } from './Pages/Admin/customer/customer-info/customer-info-list/customer-info-list.component';
import { AgentLoginComponent } from './Auth/Agent/agent-login/agent-login.component';
import { AgentRegisterComponent } from './Auth/Agent/agent-register/agent-register.component';
import { CustomerRegisterComponent } from './Auth/Customer/customer-register/customer-register.component';

export const routes: Routes = [

  { path: '', component: UserloginComponent},
  { path: 'login', component: UserloginComponent },
  // {
  //   path: 'agent',
  //   component: AgentlandingPageComponent,
  //   children: [
  //     { path: 'login', component: AgentLoginComponent }, // matches /agent/login
  //     { path: 'register', component: AgentRegisterComponent } // /agent/register
  //   ]
  // },
  { path: 'agent/login', component: AgentLoginComponent},
  { path: 'agent/register', component: AgentRegisterComponent},
  { path: 'customer/register', component: CustomerRegisterComponent},
  { path: 'register', component: UserregisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adminMyAccount', component: MyAccountComponent },
  { path: 'supplierType', component: SupplierTypeComponent },
  { path: 'supplierTypeEntry', component: SupplierTypeEntryComponent },
  { path: 'supplierTypeEntry/:id', component: SupplierTypeEntryComponent },
  { path: 'supplierInfoList', component: SupplierInfoListComponent },
  { path: 'AddEditSupplierInfo', component: AddEditSupplierInfoComponent },
  { path: 'AddEditSupplierInfo/:id', component: AddEditSupplierInfoComponent },
  { path: 'foodTypeList', component: FoodTypeListComponent },
  { path: 'addEditFoodType', component: AddEditFoodTypeComponent },
  { path: 'addEditFoodType/:id', component: AddEditFoodTypeComponent },
  { path: 'foodInfoList', component: FoodInfoListComponent },
  { path: 'addEditFoodInfo', component: AddEditFoodInfoComponent },
  { path: 'addEditFoodInfo/:id', component: AddEditFoodInfoComponent },
  { path: 'addEditCustomerType', component: AddEditCustomerTypeComponent },
  { path: 'addEditCustomerType/:id', component: AddEditCustomerTypeComponent },
  { path: 'custTypeList', component: CustomerTypeListComponent },
  { path: 'addEditCustomerInfo', component: AddEditCustomerInfoComponent },
  { path: 'addEditCustomerInfo/:id', component: AddEditCustomerInfoComponent },
  { path: 'custInfoList', component: CustomerInfoListComponent },
  
  ];
