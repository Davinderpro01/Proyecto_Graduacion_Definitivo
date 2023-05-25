import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { PrincipalComponent } from "./componentes/principal/principal.component";
import { IngresoComponent } from "./componentes/ingreso/ingreso.component";
import { PerfilComponent } from "./componentes/perfil/perfil.component";
import { RegistroComponent } from "./componentes/registro/registro.component";

import { PruebasComponent } from './componentes/perfil/pruebas/pruebas.component';

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

const routes: Routes = [
  {
    path: "",
    redirectTo: "/principal",
    pathMatch: "full"
  },
  {
    path: "principal",
    component: PrincipalComponent
  },
  {
    path: "perfil",
    canActivate: [AuthGuard],
    component: PerfilComponent
  },
  {
    path: "perfil/pruebas",
    canActivate: [AuthGuard],
    component: PruebasComponent
  },
  {
    path: "perfil/aritmetica",
    canActivate: [AuthGuard],
    component: AritmeticaComponent
  },
  {
    path: "perfil/geometria",
    canActivate: [AuthGuard],
    component: GeometriaComponent
  },
  {
    path: "perfil/logica",
    canActivate: [AuthGuard],
    component: LogicaComponent
  },
  {
    path: "perfil/algebra",
    canActivate: [AuthGuard],
    component: AlgebraComponent
  },
  {
    path: "perfil/calculo",
    canActivate: [AuthGuard],
    component: CalculoComponent
  },
  {
    path: "perfil/aritmetica/numeros-naturales",
    canActivate: [AuthGuard],
    component: NumerosNaturalesComponent
  },
  {
    path: "perfil/aritmetica/numeros-enteros",
    canActivate: [AuthGuard],
    component: NumerosEnterosComponent
  },
  {
    path: "perfil/aritmetica/fracciones",
    canActivate: [AuthGuard],
    component: FraccionesComponent
  },
  {
    path: "perfil/aritmetica/numeros-decimales",
    canActivate: [AuthGuard],
    component: NumerosDecimalesComponent
  },
  {
    path: "perfil/aritmetica/porcentajes",
    canActivate: [AuthGuard],
    component: PorcentajesComponent
  },
  {
    path: "perfil/aritmetica/potencia-raiz",
    canActivate: [AuthGuard],
    component: PotenciaRaizComponent
  },
  {
    path: "perfil/aritmetica/racionales-irracionales",
    canActivate: [AuthGuard],
    component: RacionalesIrracionalesComponent
  },
  {
    path: "perfil/aritmetica/jerarquia",
    canActivate: [AuthGuard],
    component: JerarquiaComponent
  },
  {
    path: "perfil/aritmetica/problemas",
    canActivate: [AuthGuard],
    component: ProblemasComponent
  },
  {
    path: "perfil/geometria/figuras",
    canActivate: [AuthGuard],
    component: FigurasComponent
  },
  {
    path: "perfil/geometria/triangulos",
    canActivate: [AuthGuard],
    component: TriangulosComponent
  },
  {
    path: "perfil/geometria/cuadrilateros",
    canActivate: [AuthGuard],
    component: CuadrilaterosComponent
  },
  {
    path: "perfil/geometria/circunferencia",
    canActivate: [AuthGuard],
    component: CircunferenciaComponent
  },
  {
    path: "perfil/geometria/areas-perimetros",
    canActivate: [AuthGuard],
    component: AreasPerimetrosComponent
  },
  {
    path: "perfil/geometria/volumenes-areas",
    canActivate: [AuthGuard],
    component: VolumenesAreasComponent
  },
  {
    path: "perfil/geometria/geometria-analitica",
    canActivate: [AuthGuard],
    component: GeometriaAnaliticaComponent
  },
  {
    path: "perfil/algebra/expresiones",
    canActivate: [AuthGuard],
    component: ExpresionesComponent
  },
  {
    path: "perfil/algebra/ecuaciones",
    canActivate: [AuthGuard],
    component: EcuacionesComponent
  },
  {
    path: "perfil/algebra/inecuaciones",
    canActivate: [AuthGuard],
    component: InecuacionesComponent
  },
  {
    path: "perfil/algebra/factorizacion",
    canActivate: [AuthGuard],
    component: FactorizacionComponent
  },
  {
    path: "perfil/algebra/lineales-cuadraticas",
    canActivate: [AuthGuard],
    component: LinealesCuadraticasComponent
  },
  {
    path: "perfil/algebra/problemas-algebra",
    canActivate: [AuthGuard],
    component: ProblemasAlgebraComponent
  },
  {
    path: "perfil/algebra/funciones",
    canActivate: [AuthGuard],
    component: FuncionesComponent
  },
  {
    path: "perfil/logica/proposiciones",
    canActivate: [AuthGuard],
    component: ProposicionesComponent
  },
  {
    path: "perfil/logica/tablas",
    canActivate: [AuthGuard],
    component: TablasComponent
  },
  {
    path: "perfil/logica/implicacion",
    canActivate: [AuthGuard],
    component: ImplicacionComponent
  },
  {
    path: "perfil/logica/argumentos",
    canActivate: [AuthGuard],
    component: ArgumentosComponent
  },
  {
    path: "perfil/logica/logica-matematica",
    canActivate: [AuthGuard],
    component: LogicaMatematicaComponent
  },
  {
    path: "perfil/calculo/limites",
    canActivate: [AuthGuard],
    component: LimitesComponent
  },
  {
    path: "perfil/calculo/derivadas",
    canActivate: [AuthGuard],
    component: DerivadasComponent
  },
  {
    path: "perfil/calculo/aplicacion",
    canActivate: [AuthGuard],
    component: AplicacionComponent
  },
  {
    path: "perfil/calculo/integrales",
    canActivate: [AuthGuard],
    component: IntegralesComponent
  },
  {
    path: "perfil/calculo/aplicacion-integrales",
    canActivate: [AuthGuard],
    component: AplicacionIntegralesComponent
  },
  {
    path: "perfil/calculo/sucesiones",
    canActivate: [AuthGuard],
    component: SucesionesComponent
  },
  {
    path: "ingreso",
    component: IngresoComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
