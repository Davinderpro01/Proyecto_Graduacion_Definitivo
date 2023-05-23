import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
  { path: 'perfil', canActivate: [AuthGuard], component: PerfilComponent },
  { path: '**', redirectTo: '/ingreso', pathMatch: 'full' } // Redirigir rutas desconocidas al componente de ingreso
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IngresoComponent,
    PrincipalComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
