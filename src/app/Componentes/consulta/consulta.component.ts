import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas:any[]=[];
  constructor(private consultaService:ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.getConsultas().subscribe(resp=>this.consultas=resp);
  }

}
