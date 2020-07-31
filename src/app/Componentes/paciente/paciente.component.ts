import { Component, OnInit } from '@angular/core';
import { PacienteModel } from '../../Models/paciente.model';
import { NgForm } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente = new PacienteModel();
  pacientes: PacienteModel[] = [];
  constructor( private pacienteService: PacienteService) { }

  ngOnInit(){

    this.pacienteService.getPacientes().subscribe( resp=>{
      this.pacientes=resp
    });
  }

  guardar(form: NgForm){

    if(form.invalid){
      console.log('Formulario no válido');
      return;

    }

    this.pacienteService.crearPaciente(this.paciente).subscribe( resp=>{
      console.log(resp);
    });

  }



}
