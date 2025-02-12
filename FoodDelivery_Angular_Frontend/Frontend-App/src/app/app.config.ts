import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadingSpinnerInterceptor } from './Interceptors/loading-spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptors([loadingSpinnerInterceptor])),
    importProvidersFrom([BrowserAnimationsModule])
  ]
};
