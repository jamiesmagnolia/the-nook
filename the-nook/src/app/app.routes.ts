import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'The Book Nook | Home',
        component: HomeComponent,
    },

    {
        path: 'user-dashboard',
        title: 'The Book Nook | Dashboard',
        component: DashboardComponent,
    }
];
