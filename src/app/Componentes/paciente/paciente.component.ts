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
  oculto = ''
  oculto2 = ''
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
    console.log('holi')
    this.oculto='block'
    this.p=p;
  }

  guardarConsulta(form: NgForm){

    if(form.invalid){
      console.log(form);
      console.log('Formulario no válido');
      return;

    }

    console.log(this.p.rut);

    this.consulta.rut=this.p.rut;

    this.consultaService.crearConsulta(this.consulta).subscribe(resp=>{
      console.log(resp);
      Swal.fire({
        icon: 'success',
       title: 'Consulta creada con éxito.'
  
     }).then(resp=>{
       this.oculto = ''
      if(resp.value){this.router.navigate(['/consulta']);
      }
  
      });
    });
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
     }).then (resp =>{
       if(resp.value){
         this.oculto2 = ''
         window.location.reload();
       }
     });


    });
  }

  abrirNuevoPaciente(){
    this.oculto2='block'
  }
  cerrarModal(){
    this.oculto2=''
    this.oculto=''
  }
}
