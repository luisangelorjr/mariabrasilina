import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-components',
  templateUrl: './random-components.component.html',
  styleUrls: ['./random-components.component.css']
})
export class RandomComponentsComponent implements OnInit {
  hidden: boolean = false;
  simpleContent: string = 'S';
  overlap: BooleanInput = true;
  disabled: BooleanInput = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
