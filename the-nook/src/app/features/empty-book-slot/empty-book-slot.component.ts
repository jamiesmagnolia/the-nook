import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-empty-book-slot',
  imports: [
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './empty-book-slot.component.html',
  styleUrl: './empty-book-slot.component.scss'
})
export class EmptyBookSlotComponent {



}
