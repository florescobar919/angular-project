import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from '../interfaces/user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user! : User;
  @Input({required:true}) selected! : boolean;
  @Output() selectUser = new EventEmitter<string>();

 imagePath = computed(()=> {
  return 'users/' + this.user.avatar;
 })

  onSelectedUser(idUser: string) {
    this.selectUser.emit(idUser);
  }
}
