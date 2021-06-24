import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'; //paso2

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Page404Component } from './components/page404/page404.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EstudiosyHabilidadesComponent } from './components/estudiosy-habilidades/estudiosy-habilidades.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    Page404Component,
    PresentacionComponent,
    PerfilComponent,
    ProyectosComponent,
    EstudiosyHabilidadesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()//paso 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
