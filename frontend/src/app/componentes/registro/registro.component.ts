import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registrarUsuario(): void {
    if (this.validarCampos()) {
      const url = 'http://localhost:3000/registro'; // Ajusta la URL a la ruta correspondiente en tu backend
      const usuario = { nombre: this.nombre, email: this.email, password: this.password };

      this.http.post(url, usuario).subscribe(
        {
          next: (response: any) => {
            console.log('Registro exitoso:', response);
            this.successMessage = 'Usuario registrado exitosamente.';
            this.nombre = '';
            this.email = '';
            this.password = '';
          },
          error: (error: any) => {
            console.error('Error en el registro:', error);
            this.errorMessage = error.error.message;
          }
        }
      );
    }
  }

  nombreValido(): boolean {
    return !!this.nombre; // Verifica si el campo "nombre" no está vacío
  }

  emailValido(): boolean {
    return !!this.email; // Verifica si el campo "email" no está vacío
  }

  validarCampos(): boolean {
    if (!this.nombre || !this.email || !this.password) {
      this.errorMessage = 'Todos los campos son requeridos.';
      return false;
    }

    return true;
  }
}