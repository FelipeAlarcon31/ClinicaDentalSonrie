import { Component, OnInit } from '@angular/core';
import { PacienteModel } from '../../Models/paciente.model';
import { NgForm } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EspecialistaModel } from '../../Models/especialista.model';
import { EspecialistaService } from '../../services/especialista.service';
import { ConsultaModel } from '../../Models/consulta.model';
import { ConsultaService } from '../../services/consulta.service';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  consulta = new ConsultaModel();
  paciente = new PacienteModel();
  pacientes: PacienteModel[] = [];
  especialistas: EspecialistaModel[] =[];
  p=new PacienteModel();
  constructor( private pacienteService: PacienteService, private router:Router, private especialistaService:EspecialistaService,
    private consultaService:ConsultaService) { }

  ngOnInit(){

    this.pacienteService.getPacientes().subscribe( resp=>{
      this.pacientes=resp
    });

    this.especialistaService.getEspecialistas().subscribe(resp=>{
      this.especialistas=resp
    });
  }

  obtenerPaciente(p:any){

    this.p=p;
  }

  guardarConsulta(form: NgForm){

    if(form.invalid){
      console.log(form);
      console.log('Formulario no válido');
      return;

    }

    this.consultaService.crearConsulta(this.consulta).subscribe(resp=>{
      console.log(resp);
      Swal.fire({
        icon: 'success',
       title: 'Consulta creada con éxito.',
     })


     } );

  }
  guardar(form: NgForm){

    if(form.invalid){

      console.log('Formulario no válido');



      return;

    }

    this.pacienteService.crearPaciente(this.paciente).subscribe( (resp:any)=>{
      console.log(resp);
      Swal.fire({
        icon: 'success',
       title: 'Paciente creado con éxito.',
     });


    });






  }



}
