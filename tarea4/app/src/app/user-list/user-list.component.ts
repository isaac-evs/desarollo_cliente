/* OnInit: initialize data */
/* Input/Output: enables to comunicate with parent  */
/* EventEmitter: Creates event to be emitted to parent */
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "../user.service";
import { User } from "../user.interface";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.scss",
})

/* Export class for use in other components */
export class UserListComponent implements OnInit {
  /* Recieve value from parent container  */
  @Input() selectedUserId: number | undefined;
  /* Emit value to parent container */
  @Output() userSelected = new EventEmitter<User>();

  /* Array of users */
  users: User[] = [];

  constructor(private userService: UserService) {}

  /* Function to initialize data */
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  /* Function to handle changes */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedUserId"] && !changes["selectedUserId"].currentValue) {
      this.users = this.users.map((user) => ({ ...user, selected: false }));
    }
  }

  /* Function to select user */
  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
