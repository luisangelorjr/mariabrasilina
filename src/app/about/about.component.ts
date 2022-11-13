import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
longText: string = 'Em 202X durante uma viagem a Bahia';

  constructor() { }

  ngOnInit(): void {
  }

}
