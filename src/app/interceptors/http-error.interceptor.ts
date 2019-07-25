import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  responseErrorHandlers = {
    401: this.handle401Error,
    403: this.handle403Error,
    404: this.handle404Error,
    409: this.handle409Error,
    422: this.handle422Error,
    500: this.handle500Error
  };

  handle401Error(error) {}
  handle403Error(error) {}
  handle404Error(error) {}
  handle409Error(error) {}
  handle422Error(error) {}
  handle500Error(error) {}

  defaultErrorHandler(error) {}

  clientErrorHandler(error) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          const responseErrorHandler =
            this.responseErrorHandlers[error.status] ||
            this.defaultErrorHandler.bind(this);
          responseErrorHandler(error);
        } else {
          this.clientErrorHandler(error);
        }
        return throwError(error);
      })
    );
  }
}
