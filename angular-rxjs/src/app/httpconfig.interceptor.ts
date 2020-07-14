import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserSessionService } from './modules/user/services/user-session.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private userSessionService: UserSessionService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.userSessionService.accessToken}`
      ),
    });

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    if (request.headers.get('Content-Type') === 'none') {
      request.headers.delete('Content-Type');
      request = request.clone({
        headers: request.headers.delete('Content-Type'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
