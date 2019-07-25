import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { NoopIntercetor } from './noop-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopIntercetor },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor }
];
