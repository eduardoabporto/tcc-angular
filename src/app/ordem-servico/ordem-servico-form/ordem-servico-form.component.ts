import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { OrdemServico } from '../OrdemServico';
import { OrdemServicoService } from '../../ordem-servico.service';


@Component({
  selector: 'app-ordem-servico-form',
  templateUrl: './ordem-servico-form.component.html',
  styleUrls: ['./ordem-servico-form.component.css']
})
export class OrdemServicoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico: OrdemServico
  success: boolean = false
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private ordemService: OrdemServicoService
  ){
    this.servico = new OrdemServico();
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    this.ordemService
      .salvar( this.servico)
      .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.servico = new OrdemServico();
        },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
  }
}
