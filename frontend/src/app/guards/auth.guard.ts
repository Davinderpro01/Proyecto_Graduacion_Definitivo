import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.verifyToken(token);
    } else {
      this.router.navigate(['/ingreso']);
      return of(false);
    }
  }

  verifyToken(token: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Authorization', token);
    console.log('AuthGuard canActivate()'); // Verificar si el guardia de autenticación se ejecuta correctamente
    return this.http.get<any>('http://localhost:3000/perfil', { headers }).pipe(
      map(response => {
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error.error.message);
        if (error.status === 401 && error.error.message === 'Acceso no autorizado') {
          this.router.navigate(['/ingreso']);
        }
        return of(false);
      })
    );
  }
}
