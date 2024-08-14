import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../interfaces/new-task.model';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  txtTitle = '';
  txtSummary = '';
  txtDueDate = '';
  private taskService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.txtTitle,
      summary: this.txtSummary,
      duedate: this.txtDueDate
    }, this.userId);
    this.close.emit();
  }
}
