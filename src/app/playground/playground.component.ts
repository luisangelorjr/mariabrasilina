import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
options: string[ ] = ["Opcao01", "Opcao2"];

  constructor() { }

  ngOnInit(): void {
  }

}
