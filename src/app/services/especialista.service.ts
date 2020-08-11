import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EspecialistaModel } from '../Models/especialista.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService{

  private url='https://clinicadental-49f77.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearEspecialista(especialista:EspecialistaModel){

    return this.http.post(`${this.url}/Especialista.json`, especialista).pipe(
      map((resp: any) => {
        especialista.id =resp.name;
        return especialista;
      } )
    );

  }

  getEspecialistas(){
    return this.http.get(`${this.url}/Especialista.json`).pipe(
      map( this.crearArreglo)
    );
  }

  crearArreglo(EspecialistaObj: object){
    const especialistas: EspecialistaModel[]=[];
    console.log(EspecialistaObj);
    if(EspecialistaObj === null){
      return [];
    }
    Object.keys(EspecialistaObj).forEach(key=>{
      const especialista: EspecialistaModel = EspecialistaObj[key];
      especialista.id=key;

      especialistas.push(especialista);
    });
    return especialistas;
  }
}
