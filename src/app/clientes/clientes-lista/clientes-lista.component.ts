import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clientesSelecionado: Cliente;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service: ClientesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clientesSelecionado = cliente;
  }

  deletarCliente(){
    this.service
      .deletar(this.clientesSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar o cliente.')
  }
}
