import { Component, inject, Input, } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!: Task;

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }

}
