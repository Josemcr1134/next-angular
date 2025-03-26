import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Ocurrió un error inesperado';
        if (error.status === 404) {
          errorMsg = 'Recurso no encontrado';
        } else if (error.status === 500) {
          errorMsg = 'Error en el servidor';
        }
        console.error(errorMsg);
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
