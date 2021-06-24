import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importacion de componentes
import { HomeComponent } from './components/home/home.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { PresentacionComponent } from './components/presentacion/presentacion.component'
import { PerfilComponent } from './components/perfil/perfil.component'
import { ProyectosComponent } from './components/proyectos/proyectos.component'
import { EstudiosyHabilidadesComponent } from './components/estudiosy-habilidades/estudiosy-habilidades.component'
import { FooterComponent } from './components/footer/footer.component'
import { Page404Component } from './components/page404/page404.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'navBar', component: NavBarComponent},
  {path:'presentacion', component: PresentacionComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'estudiosy-habilidades', component: EstudiosyHabilidadesComponent},
  {path:'footer', component: FooterComponent},
  {path:'**', component: Page404Component},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
