import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from '../core/services/books.service';
import { Book } from '../shared/interface/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  private subscription: Subscription = new Subscription;

  bookExample: Book = {
    id: 1,
    author: "Autor Teste",
    title: "Sou um Titulo de Teste",
    description: "Descricao de teste",
    coverImage: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
  }

  @Input()
  title: string = this.bookExample.title;

  @Input()
  author: string = this.bookExample.author;

  @Input()
  description: string = this.bookExample.description;

  @Input()
  coverImage: string = this.bookExample.coverImage;

  constructor(bookService: BooksService) { }

  ngOnInit(): void { }

}
