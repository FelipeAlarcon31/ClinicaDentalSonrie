import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaModel } from '../Models/consulta.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private url='https://clinicadental-49f77.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearConsulta(consulta:ConsultaModel){

    return this.http.post(`${this.url}/Consulta.json`, consulta).pipe(
      map((resp: any) => {
        consulta.id =resp.name;
        return consulta;
      } )
    );

  }

  getConsultas(){
    return this.http.get(`${this.url}/Consulta.json`).pipe(
      map( this.crearArreglo)
    );
  }

  crearArreglo(consultaObj: object){
    const consultas: ConsultaModel[]=[];
    console.log(consultaObj);
    if(consultaObj === null){
      return [];
    }
    Object.keys(consultaObj).forEach(key=>{
      const consulta: ConsultaModel = consultaObj[key];
      consulta.id=key;

      consultas.push(consulta);
    });
    return consultas;
  }
}
