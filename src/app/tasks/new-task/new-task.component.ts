import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../interfaces/new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 @Output() cancel = new EventEmitter<void>();
 @Output() add = new EventEmitter<NewTask>();
 /*
 txtTitle = signal('');
 txtSummary = signal('');
 txtDueDate = signal('');
 */
 txtTitle = '';
 txtSummary = '';
 txtDueDate = '';

 onCancel() {
  this.cancel.emit();
 }

 onSubmit() {
  this.add.emit({
    title: this.txtTitle,
    summary: this.txtSummary,
    duedate: this.txtDueDate
  });
 }
}
