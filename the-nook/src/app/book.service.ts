import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  /**
   * API URL for backend handling.
   */
  private apiURL = 'http://localhost:5000/api/books';

  constructor(private http: HttpClient) {}

  /**
   * Adds a book to the database using POST.
   * @param book The book to be added.
   */
  addBook(book: any): Observable<any> {
    return this.http.post(this.apiURL, book);
  }

  /**
   * Retrieves ALL the list of books stored in the database using GET.
   */
  getAllBooks(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  /**
   * Deletes a book from the database using DELETE.
   * @param id The (MongoDB) ID of the book to be deleted.
   */
  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}}`);
  }

}
