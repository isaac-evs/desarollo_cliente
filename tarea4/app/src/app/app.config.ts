import { ApplicationConfig } from "@angular/core"; /* Application Configuration */
import { provideRouter } from "@angular/router"; /* Router Module */
import { provideHttpClient } from "@angular/common/http"; /* Http request module */

/* Import Routes */
import { routes } from "./app.routes";

/* Application Configuration */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
