import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { NgForm } from '@angular/forms';
import { EspecialistaService } from '../../services/especialista.service';
import { ConsultaModel } from '../../Models/consulta.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas:any[]=[];
  consultas1:any[]=[];
  consulta=new ConsultaModel();
  busqueda:any[]=[];
  fecha:Date;
  constructor(private consultaService:ConsultaService,private especialistaService:EspecialistaService) { }

  ngOnInit(): void {
    this.consultaService.getConsultas().subscribe(resp=>{
      this.consultas=resp;

      this.especialistaService.getEspecialistas().subscribe(resp=>{
        this.consultas.forEach(e => {
            resp.forEach(esp => {

         if(e.especialista==esp.rut){
             e.especialista= esp.nombre+" " + esp.apellido;


         }
        });

         });
       });


    } );


  }

  buscar(fecha){
    let aux:[]=[];
    this.consultas1=aux;
    this.consultas.forEach(e => {
      if(e.fecha==fecha){
        this.consultas1.push(e);

      }


    });


  }

}
