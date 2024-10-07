/* Import Statements */
import { Injectable } from "@angular/core"; /* Define Service decorator */
import { HttpClient } from "@angular/common/http"; /* Http request module */
import { Observable } from "rxjs"; /* Asynchronous operations */
import { User } from "./user.interface"; /* User Interface */

/* User Service Class */
@Injectable({
  providedIn: "root",
}) /* Service is available to any class that requests it */
export class UserService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  /* Injected as private dependecny of the class */
  constructor(private http: HttpClient) {}

  /* Get Method */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
