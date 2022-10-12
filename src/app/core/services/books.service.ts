import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/interface/book.interface';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Book[]> {
    return this.apiService.getAll('/books')
      .pipe(map(data => data));
  }
}
