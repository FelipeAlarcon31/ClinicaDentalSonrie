import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PacienteModel } from '../Models/paciente.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private url='https://clinicadental-49f77.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearPaciente(paciente:PacienteModel){

    return this.http.post(`${this.url}/Paciente.json`, paciente).pipe(
      map((resp: any) => {
        paciente.id =resp.name;
        return paciente;
      } )
    );

  }

  getPacientes(){
    return this.http.get(`${this.url}/Paciente.json`).pipe(
      map( this.crearArreglo)
    );
  }

  crearArreglo(PacienteObj: object){
    const pacientes: PacienteModel[]=[];
    console.log(PacienteObj);
    if(PacienteObj === null){
      return [];
    }
    Object.keys(PacienteObj).forEach(key=>{
      const paciente: PacienteModel = PacienteObj[key];
      paciente.id=key;

      pacientes.push(paciente);
    });
    return pacientes;
  }

}
