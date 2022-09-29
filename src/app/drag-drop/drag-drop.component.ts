import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent {
  todo = [
    'Trabalhar',
    'Fazer as compras',
    'Iniciar a mentoria',
    'Ir dormir'
  ];

  doing = [
    'Estudar Angular'
  ];

  done = [
    'Levantar',
    'Escovar os dentes',
    'Tomar banho',
    'Olhar emails',
    'Andar com o cachorro'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
