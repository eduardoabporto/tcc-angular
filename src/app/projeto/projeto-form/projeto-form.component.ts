import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { Projeto } from '../Projeto';
import { ProjetoService } from '../../projeto.service';


@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

  clientes: Cliente[] = []
  projeto: Projeto
  success: boolean = false
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private projetoService: ProjetoService
  ){
    this.projeto = new Projeto();
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    this.projetoService
      .salvar( this.projeto)
      .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.projeto = new Projeto();
        },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
  }
}
