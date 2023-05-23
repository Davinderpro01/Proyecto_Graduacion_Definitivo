import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilData: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log(token); // Verificar si se obtiene el token correctamente del almacenamiento local
    if (!token) {
      this.router.navigate(['/ingreso']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', token);

    this.http.get<any>('http://localhost:3000/perfil', { headers }).subscribe(
      response => {
        this.perfilData = response.user;
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.message);
        if (error.status === 401 && error.error.message === 'Acceso no autorizado') {
          this.router.navigate(['/ingreso']);
        }
      }
    );
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/ingreso']);
  }
}
