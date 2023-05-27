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

import { PruebasComponent } from './componentes/perfil/pruebas/pruebas.component';
import { EstadisticasComponent } from './componentes/perfil/estadisticas/estadisticas.component';

import { AritmeticaComponent } from './componentes/perfil/aritmetica/aritmetica.component';
import { GeometriaComponent } from './componentes/perfil/geometria/geometria.component';
import { AlgebraComponent } from './componentes/perfil/algebra/algebra.component';
import { LogicaComponent } from './componentes/perfil/logica/logica.component';
import { CalculoComponent } from './componentes/perfil/calculo/calculo.component';

import { NumerosNaturalesComponent } from './componentes/perfil/aritmetica/numeros-naturales/numeros-naturales.component';
import { NumerosEnterosComponent } from './componentes/perfil/aritmetica/numeros-enteros/numeros-enteros.component';
import { FraccionesComponent } from './componentes/perfil/aritmetica/fracciones/fracciones.component';
import { NumerosDecimalesComponent } from './componentes/perfil/aritmetica/numeros-decimales/numeros-decimales.component';
import { PorcentajesComponent } from './componentes/perfil/aritmetica/porcentajes/porcentajes.component';
import { PotenciaRaizComponent } from './componentes/perfil/aritmetica/potencia-raiz/potencia-raiz.component';
import { RacionalesIrracionalesComponent } from './componentes/perfil/aritmetica/racionales-irracionales/racionales-irracionales.component';
import { JerarquiaComponent } from './componentes/perfil/aritmetica/jerarquia/jerarquia.component';
import { ProblemasComponent } from './componentes/perfil/aritmetica/problemas/problemas.component';

import { FigurasComponent } from './componentes/perfil/geometria/figuras/figuras.component';
import { TriangulosComponent } from './componentes/perfil/geometria/triangulos/triangulos.component';
import { CuadrilaterosComponent } from './componentes/perfil/geometria/cuadrilateros/cuadrilateros.component';
import { CircunferenciaComponent } from './componentes/perfil/geometria/circunferencia/circunferencia.component';
import { AreasPerimetrosComponent } from './componentes/perfil/geometria/areas-perimetros/areas-perimetros.component';
import { VolumenesAreasComponent } from './componentes/perfil/geometria/volumenes-areas/volumenes-areas.component';
import { GeometriaAnaliticaComponent } from './componentes/perfil/geometria/geometria-analitica/geometria-analitica.component';

import { ExpresionesComponent } from './componentes/perfil/algebra/expresiones/expresiones.component';
import { EcuacionesComponent } from './componentes/perfil/algebra/ecuaciones/ecuaciones.component';
import { InecuacionesComponent } from './componentes/perfil/algebra/inecuaciones/inecuaciones.component';
import { FactorizacionComponent } from './componentes/perfil/algebra/factorizacion/factorizacion.component';
import { LinealesCuadraticasComponent } from './componentes/perfil/algebra/lineales-cuadraticas/lineales-cuadraticas.component';
import { ProblemasAlgebraComponent } from './componentes/perfil/algebra/problemas-algebra/problemas-algebra.component';
import { FuncionesComponent } from './componentes/perfil/algebra/funciones/funciones.component';

import { ProposicionesComponent } from './componentes/perfil/logica/proposiciones/proposiciones.component';
import { TablasComponent } from './componentes/perfil/logica/tablas/tablas.component';
import { ImplicacionComponent } from './componentes/perfil/logica/implicacion/implicacion.component';
import { ArgumentosComponent } from './componentes/perfil/logica/argumentos/argumentos.component';
import { LogicaMatematicaComponent } from './componentes/perfil/logica/logica-matematica/logica-matematica.component';
import { ConjuntosComponent } from './componentes/perfil/logica/conjuntos/conjuntos.component';

import { LimitesComponent } from './componentes/perfil/calculo/limites/limites.component';
import { DerivadasComponent } from './componentes/perfil/calculo/derivadas/derivadas.component';
import { AplicacionComponent } from './componentes/perfil/calculo/aplicacion/aplicacion.component';
import { IntegralesComponent } from './componentes/perfil/calculo/integrales/integrales.component';
import { AplicacionIntegralesComponent } from './componentes/perfil/calculo/aplicacion-integrales/aplicacion-integrales.component';
import { SucesionesComponent } from './componentes/perfil/calculo/sucesiones/sucesiones.component';
import { YoutubePipe } from './pipe/youtube.pipe';


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'perfil', canActivate: [AuthGuard], component: PerfilComponent },
  { path: '**', redirectTo: '/principal', pathMatch: 'full' } // Redirigir rutas desconocidas al componente de ingreso
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IngresoComponent,
    PrincipalComponent,
    PerfilComponent,
    PruebasComponent,
    AritmeticaComponent,
    GeometriaComponent,
    AlgebraComponent,
    LogicaComponent,
    CalculoComponent,
    NumerosNaturalesComponent,
    NumerosEnterosComponent,
    FraccionesComponent,
    NumerosDecimalesComponent,
    PorcentajesComponent,
    PotenciaRaizComponent,
    RacionalesIrracionalesComponent,
    JerarquiaComponent,
    ProblemasComponent,
    FigurasComponent,
    TriangulosComponent,
    CuadrilaterosComponent,
    CircunferenciaComponent,
    AreasPerimetrosComponent,
    VolumenesAreasComponent,
    GeometriaAnaliticaComponent,
    ExpresionesComponent,
    EcuacionesComponent,
    InecuacionesComponent,
    FactorizacionComponent,
    LinealesCuadraticasComponent,
    ProblemasAlgebraComponent,
    FuncionesComponent,
    ProposicionesComponent,
    TablasComponent,
    ImplicacionComponent,
    ArgumentosComponent,
    LogicaComponent,
    LogicaMatematicaComponent,
    ConjuntosComponent,
    LimitesComponent,
    DerivadasComponent,
    AplicacionComponent,
    IntegralesComponent,
    AplicacionIntegralesComponent,
    SucesionesComponent,
    YoutubePipe,
    EstadisticasComponent,
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
