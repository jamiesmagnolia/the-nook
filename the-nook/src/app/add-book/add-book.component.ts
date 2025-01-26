import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlider, MatSliderModule} from '@angular/material/slider';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-add-book',
  imports: [
    MatCardModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule,
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBookComponent {

  bookTitle = new FormControl('');
  bookAuthor = new FormControl('');
  bookDescription = new FormControl('');
  bookLanguage = new FormControl('');
  bookStatus = new FormControl('');

  onInput() {}

}
