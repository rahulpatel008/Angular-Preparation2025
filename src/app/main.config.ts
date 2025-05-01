import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./main.routes";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { accountReducer } from "./account/account.reducer";

export const mainConfig: ApplicationConfig = {
    providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ account: accountReducer }),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
  };