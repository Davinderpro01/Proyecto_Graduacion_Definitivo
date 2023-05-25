import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public http: HttpClient, public router: Router) {}

  iniciarSesion() {
    const user = {
      email: this.email,
      password: this.password
    };

    // Realizar la solicitud POST al endpoint de inicio de sesión en el backend
    this.http.post<any>('http://localhost:3000/ingreso', user).subscribe(
      (response: any) => {
         // Verificar si se recibe el token correctamente en la respuesta del servidor
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/perfil']);
        } else {
          this.errorMessage = 'No se recibió un token válido en la respuesta del servidor';
        }
      },
      (error: any) => {
        if (error.status === 401) {
          this.errorMessage = 'Correo o contraseña incorrectos';
        } else {
          this.errorMessage = 'Error en la solicitud de inicio de sesión';
        }
      }
    );
  }
}
