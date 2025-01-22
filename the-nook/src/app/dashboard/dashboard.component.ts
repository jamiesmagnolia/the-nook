import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  /**
   * List of books after retrieval.
   */
  books: any[] = [];

  constructor(private bookService: BookService) {

  }

  /**
   * Upon initialization, load the list of books in the collection(s).
   */
  ngOnInit(): void {
    this.loadBooks();
  }

  /**
   * Performs logic to open a modal to add new books to the shelves.
   */
  openAddBookModal(): void {
    // TODO: implement
  }

  /**
   * Retrieve all the books from the database.
   */
  loadBooks(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  /**
   * Removes a book from the shelf by retrieving it via its ID.
   * @param id Id of the book to remove from the shelves.
   */
  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe((data) => {
      this.loadBooks();
    });
  }

}
