import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterLink, 
    RouterOutlet, 
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The Book Nook';
}
