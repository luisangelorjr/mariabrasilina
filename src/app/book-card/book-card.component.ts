import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/interface/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  bookExample: Book = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
