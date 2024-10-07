import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { User } from "../user.interface";

@Component({
  selector: "app-user-details",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-details.component.html",
  styleUrl: "./user-details.component.scss",
})
export class UserDetailsComponent {
  /* Recieve value from parent container  */
  @Input() user: User | null = null;

  /* Emit value to parent container */
  @Output() clearUser = new EventEmitter<void>();

  /* Function to clear user selection */
  onClearUser() {
    this.clearUser.emit();
  }
}
