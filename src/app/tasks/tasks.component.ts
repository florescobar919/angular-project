import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTask } from '../interfaces/new-task.model';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userName!: string;
  @Input({required: true}) userId!: string;
  //private taskService : TaskService;

  constructor(private taskService: TaskService) {

  }

  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false; 
  }
}
