import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userName!: string;
  @Input({required: true}) userId!: string;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular",
      summary: "Learn all the basic and davanced features of Angular & how to apply them",
      dueDate: "2025-12-12"
    },
    {
      id: "t1",
      userId: "u3",
      title: "Master Angular",
      summary: "Learn all the basic and davanced features of Angular & how to apply them",
      dueDate: "2025-12-12"
    },
    {
      id: "t1",
      userId: "u4",
      title: "Master Angular",
      summary: "Learn all the basic and davanced features of Angular & how to apply them",
      dueDate: "2025-12-12"
    },
    {
      id: "t1",
      userId: "u2",
      title: "Master Angular",
      summary: "Learn all the basic and davanced features of Angular & how to apply them",
      dueDate: "2025-12-12"
    }
  ]

}
