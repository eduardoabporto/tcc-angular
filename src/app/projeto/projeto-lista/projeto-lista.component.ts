import { Component, OnInit } from '@angular/core';
import { projetoBusca} from './projetoBusca';
import { ProjetoService } from '../../projeto.service';
import { Projeto } from '../Projeto';
import {Cliente} from '../../clientes/cliente';
import {OrdemServicoService} from '../../ordem-servico.service';
import {Router} from '@angular/router';
import {OrdemServico} from '../../ordem-servico/OrdemServico';
import {ordemServicoBusca} from '../../ordem-servico/ordem-servico-lista/ordemServicoBusca';

@Component({
  selector: 'app-projeto-lista',
  templateUrl: './projeto-lista.component.html',
  styleUrls: ['./projeto-lista.component.css']
})
export class ProjetoListaComponent implements OnInit {

  nome: string;
  projetos: Projeto[] = [];
  projetoSelecionado: Projeto;
  lista: projetoBusca[];
  message: string;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private projetoService: ProjetoService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.projetoService
      .getProjeto()
      .subscribe( resposta => this.projetos = resposta);
  }

  preparaDelecao(projeto: Projeto){
    this.projetoSelecionado = projeto;
  }

  deletarProjeto(){
    this.projetoService
      .deletar(this.projetoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Projeto deletado com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar o Projeto.')
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
