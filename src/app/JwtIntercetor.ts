import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the JWT token from wherever you've stored it (e.g., localStorage)
    const jwtToken = localStorage.getItem('token');

    // Clone the request and add the Authorization header with the JWT token
    if (jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
    }

    // Pass the modified request to the next handler
    return next.handle(request).pipe(
        catchError((err) => {
            if(err){
                this.router.navigate(['login'])
                console.log(err)
            }
            
            return throwError(() => {
                console.log(err);}

    )
  }))
}}
