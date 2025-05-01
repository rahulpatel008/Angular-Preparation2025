import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./main.routes";

export const mainConfig: ApplicationConfig = {
    providers: [
      provideHttpClient(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
   
    ]
  };