import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthLandingPageComponent } from './pages/auth/auth-landing-page/auth-landing-page.component';


export const routes: Routes = [
    {
        path: '',
        title: 'The Book Nook',
        component: AuthLandingPageComponent
    },

    {
        path: 'home',
        title: 'The Book Nook | Home',
        component: HomePageComponent
    }
    
    // {
    //     path: '',
    //     title: 'The Book Nook | Home',
    //     component: HomeComponent,
    // },

    // {
    //     path: 'dashboard',
    //     title: 'The Book Nook | Dashboard',
    //     component: DashboardComponent,
    // },

];
