import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empresa } from '../empresa';
import { EmpresaService } from '../../empresa.service';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent implements OnInit {

  empresa: Empresa[] = [];
  empresaSelecionada: Empresa;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service: EmpresaService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getEmpresas()
      .subscribe( resposta => this.empresa = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/empresa/form'])
  }

  preparaDelecao(empresa: Empresa){
    this.empresaSelecionada = empresa;
  }

  deletarEmpresa(){
    this.service
      .deletar(this.empresaSelecionada)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Empresa deletada com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar a empresa.')
  }
}
