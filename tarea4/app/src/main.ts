import { bootstrapApplication } from "@angular/platform-browser"; /* Bootstrap Application */
import { appConfig } from "./app/app.config"; /* Application Configuration */
import { AppComponent } from "./app/app.component"; /* Application Component */

/* Bootstrap Application */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
