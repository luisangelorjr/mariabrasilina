import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from '../core/services/books.service';
import { Book } from '../shared/interface/book.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [{
    id: 0,
    title: '',
    author: '',
    coverImage: '',
    description: ''
  }];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.populateBooks();
  }

  populateBooks(): void {
    this.bookService.getAll()
      .subscribe(books => this.books = books);
  }
}
