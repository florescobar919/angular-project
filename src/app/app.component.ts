import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do';
  users = DUMMY_USERS;
  tempSelectedUser?: string ;

  get getSelectedUser () {
    return this.users.find(user => user.id === this.tempSelectedUser)!;
  }

  onSelectUser(idUser: string) {
    this.tempSelectedUser = idUser;
  }
}
