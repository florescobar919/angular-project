import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!: Task;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    this.completed.emit(this.task.id);
  }

}
