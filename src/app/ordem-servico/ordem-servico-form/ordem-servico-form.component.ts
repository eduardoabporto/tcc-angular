import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import {ClientesService} from '../../clientes.service';

@Component({
  selector: 'app-ordem-servico-form',
  templateUrl: './ordem-servico-form.component.html',
  styleUrls: ['./ordem-servico-form.component.css']
})
export class OrdemServicoFormComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClientesService
  ){ }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    console.log('submit');
  }

}
