import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { PacienteComponent } from './Componentes/paciente/paciente.component';
import { NgModule } from '@angular/core';
import { NuevoPacienteComponent } from './Componentes/Formularios/nuevo-paciente/nuevo-paciente.component';
import { NuevaConsultaComponent } from './Componentes/Formularios/nueva-consulta/nueva-consulta.component';
import { EspecialistaComponent } from './Componentes/especialista/especialista.component';
import { ConsultaComponent } from './Componentes/consulta/consulta.component';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'paciente', component: PacienteComponent},
  {path:  'IngresarPaciente', component: NuevoPacienteComponent},
  {path:  'NuevaConsulta', component: NuevaConsultaComponent},
  {path:  'consulta', component: ConsultaComponent},
  {path:  'especialistas', component: EspecialistaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
