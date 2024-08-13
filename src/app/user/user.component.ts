import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //@Input({required:true}) avatar!: string;
  //@Input({required:true}) name!: string;
  //avatar = input<string>('default value');
  //avatar = input.required<string>();
  //name = input.required<string>();
  //id = input.required<string>();

  @Input({required:true}) user! : {
    id: string,
    name: string,
    avatar: string
  }

  @Output() selectUser = new EventEmitter<string>();
  //selectUser = output<string>();

  /*get imagePath () {
    return 'users/' + this.avatar;
  }*/
 imagePath = computed(()=> {
  return 'users/' + this.user.avatar;
 })

  onSelectedUser(idUser: string) {
    this.selectUser.emit(idUser);
  }
}
