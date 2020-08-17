import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  EspecialistaService } from '../../services/especialista.service';
import { EspecialistaModel } from '../../Models/especialista.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent implements OnInit {

  especialista = new EspecialistaModel();
  especialistas: EspecialistaModel[] = [];

  constructor(private especialistaService:EspecialistaService, private router:Router) { }

  ngOnInit(): void {
    this.especialistaService.getEspecialistas().subscribe( resp=>{
      this.especialistas=resp
    });
  }

  guardar(form: NgForm){

    if(form.invalid){
      console.log('Formulario no válido');
      return;

    }

    this.especialistaService.crearEspecialista(this.especialista).subscribe( resp=>{
      console.log(resp);

      Swal.fire({
        icon: 'success',
       title: 'Especialista creado con éxito.'

     }).then(resp=>{
      if(resp.value){

       this.router.navigateByUrl("home");
     }});
    });

  }

}
