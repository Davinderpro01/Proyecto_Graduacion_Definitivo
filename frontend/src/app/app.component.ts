import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  perfilData: any;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', token);

      this.http.get<any>('http://localhost:3000/perfil', { headers }).subscribe(
        response => {
          this.perfilData = response.user;
          if (this.router.url === '/perfil') {
            this.redirigirAInicioSesion();
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401 && error.error.message === 'Acceso no autorizado') {
            this.cerrarSesion();
          }
        }
      );
    } else {
      this.router.navigate(['/ingreso']);
    }
  }


  redirigirAInicioSesion() {
    this.router.navigateByUrl('/perfil', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/perfil']);
      this.ngOnInit();
    });
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.perfilData = null;
    this.router.navigate(['/ingreso']);
  }
}
