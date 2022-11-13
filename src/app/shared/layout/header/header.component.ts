import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Book {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  durationInSeconds: number = 5;


  myControl = new FormControl('');
  options: Book[] = [{ name: 'Admiravel Mundo Novo' }, { name: '1984' }, { name: 'Neuromancer' }];
  filteredOptions: Observable<Book[]> | undefined;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(book: Book): string {
    return book && book.name ? book.name : '';
  }

  private _filter(name: string): Book[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  openSnackBar() {
    //this._snackBar.open(message: string, action: string){
    //  duration: this.durationInSeconds * 1000,
    //});
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<h1>Hi</h1>',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {}
