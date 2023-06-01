import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showEmptyFieldsError: boolean = false;
  showAuthError: boolean = false;

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/perfil']);
    }
  }

  iniciarSesion() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.showEmptyFieldsError = true;
      return;
    }

    const user = {
      email: this.email,
      password: this.password
    };

    // Realizar la solicitud POST al endpoint de inicio de sesión en el backend
    this.http.post<any>(environment.backendUrl+'ingreso', user).subscribe(
      (response: any) => {
        // Verificar si se recibe el token correctamente en la respuesta del servidor
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/perfil']).then(() => {
            window.location.reload();
          });
        } else {
          this.errorMessage = 'No se recibió un token válido en la respuesta del servidor';
        }
      },
      (error: any) => {
        if (error.status === 401) {
          this.showAuthError = true;
        } else {
          this.errorMessage = 'Error en la solicitud de inicio de sesión';
        }
      }
    );
  }
}
