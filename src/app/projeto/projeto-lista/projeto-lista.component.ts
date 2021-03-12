import { Component, OnInit } from '@angular/core';
import { projetoBusca} from './projetoBusca';
import { ProjetoService } from '../../projeto.service';
import { Projeto } from '../Projeto';
import {Cliente} from '../../clientes/cliente';

@Component({
  selector: 'app-ordem-servico-lista',
  templateUrl: './projeto-lista.component.html',
  styleUrls: ['./projeto-lista.component.css']
})
export class ProjetoListaComponent implements OnInit {

  nome: string;
  lista: projetoBusca[] = [];
  projetos: Projeto[] = [];
  projeto: Projeto
  message: string;

  constructor(
    private projetoService: ProjetoService
  ){
    this.projeto = new Projeto();
  }
  ngOnInit(): void {
    this.projetoService
      .getProjeto()
      .subscribe( resposta => this.projetos = resposta);
  }

  consultar(){
    this.projetoService
      .buscar(this.nome)
      .subscribe(response => {
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
  }
}
