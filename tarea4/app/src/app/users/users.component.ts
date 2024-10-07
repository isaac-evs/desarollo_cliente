import { Component } from "@angular/core"; /* Define Component decorator */
import { User } from "../user.interface"; /* User Interface */
import { UserListComponent } from "../user-list/user-list.component"; /* Child Component */
import { UserDetailsComponent } from "../user-details/user-details.component"; /* Child Component */

/* Configures metadata and source for component */
@Component({
  selector: "app-users",
  standalone: true,
  imports: [UserListComponent, UserDetailsComponent],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.scss",
})
/* Export class for use in other components */
export class UsersComponent {
  /* Selected User */
  selectedUser: User | null = null;

  /* Function to handle user selection */
  onUserSelected(user: User) {
    this.selectedUser = user;
  }

  /* Function to clear user selection */
  onClearUser() {
    this.selectedUser = null;
  }
}
