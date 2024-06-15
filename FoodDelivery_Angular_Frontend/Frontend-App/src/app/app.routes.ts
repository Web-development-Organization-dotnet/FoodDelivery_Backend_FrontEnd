import { Routes } from '@angular/router';
import { UserloginComponent } from './Auth/userlogin/userlogin.component';
import { UserregisterComponent } from './Auth/userregister/userregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    { path: '', component: UserloginComponent },
    { path: 'login', component: UserloginComponent },
    { path: 'register', component: UserregisterComponent },
    { path: 'dashboard', component: DashboardComponent },

];
