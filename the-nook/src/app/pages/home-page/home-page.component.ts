import { Component } from '@angular/core';
import { EmptyBookSlotComponent } from "../../features/empty-book-slot/empty-book-slot.component";

@Component({
  selector: 'app-home-page',
  imports: [EmptyBookSlotComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
