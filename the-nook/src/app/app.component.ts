import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The Book Nook';
}
