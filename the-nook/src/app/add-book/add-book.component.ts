import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlider, MatSliderModule} from '@angular/material/slider';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatIcon, MatIconModule} from '@angular/material/icon';


// export interface Fruit {
//   name: string;
// }

export interface Genre {
  name: string;
}

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
    MatIconModule
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

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

//   [
//     'Fiction', 
//     'Non-Fiction', 
//     'Sci-Fi', 
//     'Fantasy', 
//     'Romance', 
//     'Mystery', 
//     'Biography', 
//     'History', 
//     'Other'
// ],

  readonly genres = signal<Genre[]>([{name: 'Fiction'}, {name: 'Fantasy'}, {name: 'Adventure'}]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our genre
    if (value) {
      this.genres.update(genres => [...genres, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(genre: Genre): void {
    this.genres.update(genres => {
      const index = genres.indexOf(genre);
      if (index < 0) {
        return genres;
      }

      genres.splice(index, 1);
      this.announcer.announce(`Removed ${genre.name}`);
      return [...genres];
    });
  }

  edit(genre: Genre, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(genre);
      return;
    }

    // Edit existing fruit
    this.genres.update(genres => {
      const index = genres.indexOf(genre);
      if (index >= 0) {
        genres[index].name = value;
        return [...genres];
      }
      return genres;
    });
  }

}
