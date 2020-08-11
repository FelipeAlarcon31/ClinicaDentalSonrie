import { Time } from '@angular/common';

export class ConsultaModel{
  id:string;
  rut: string;
  fecha: Date;
  hora: Time;
  tipoAtencion: string;
  especialista:string;
  observacion:string;


  constructor(){

  }
}
