import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/shared/navbar/navbar.component';
import { FooterComponent } from './Componentes/shared/footer/footer.component';
import { HomeComponent } from './Componentes/home/home.component';

import { PacienteComponent } from './Componentes/paciente/paciente.component';
import { NuevoPacienteComponent } from './Componentes/Formularios/nuevo-paciente/nuevo-paciente.component';
import { NuevaConsultaComponent } from './Componentes/Formularios/nueva-consulta/nueva-consulta.component';
import { EspecialistaComponent } from './Componentes/especialista/especialista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PacienteComponent,
    NuevoPacienteComponent,
    NuevaConsultaComponent,
    EspecialistaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
