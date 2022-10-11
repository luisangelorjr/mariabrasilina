import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/interface/book.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookExamples: Book[] = [{
    title: "Admiravel Mundo Novo",
    author: "Aldous Huxley",
    coverImage: "https://m.media-amazon.com/images/I/61hOp6UFvCL.jpg",
    description: "Admirável Mundo Novo é um romance escrito por Aldous Huxley e publicado em 1932. A história se passa em Londres no ano 2540, o romance antecipa..."
  }, {
    title: "1984",
    author: "George Orwell",
    coverImage: "https://m.media-amazon.com/images/I/819js3EQwbL.jpg",
    description: "Mil Novecentos e Oitenta e Quatro, muitas vezes publicado como 1984, é um romance distópico da autoria do escritor britânico George Orwell e publicado em 1949."
  }, {
    title: "Neuromancer",
    author: "William Gibson",
    coverImage: "https://m.media-amazon.com/images/I/91Bx5ilP+EL.jpg",
    description: "Neuromancer, de William Gibson, é um dos mais famosos romances do gênero cyberpunk, e ganhou os três principais prêmios da ficção científica: Nebula, Hugo e Philip K. Dick, após sua publicação em 1984, tendo sido publicado em 1991 no Brasil pela editora Aleph."
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
