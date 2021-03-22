import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {TipoDespesa} from '../TipoDespesa';
import {TipoDespesaService} from '../../tipo-despesa.service';

@Component({
  selector: 'app-tipo-despesa-lista',
  templateUrl: './tipo-despesa-lista.component.html',
  styleUrls: ['./tipo-despesa-lista.component.css']
})
export class TipoDespesaListaComponent implements OnInit {

  tipoDespesa: TipoDespesa[] = [];
  tipoDespesaSelecionada: TipoDespesa;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private tipoDespesaservice: TipoDespesaService,
    private router: Router) {}

  ngOnInit(): void {
    this.tipoDespesaservice
      .getTipoDespesa()
      .subscribe( resposta => this.tipoDespesa = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/tipo-despesa/form'])
  }

  preparaDelecao(tipoDespesa: TipoDespesa){
    this.tipoDespesaSelecionada = tipoDespesa;
  }

  deletarTipoDespesa(){
    this.tipoDespesaservice
      .deletar(this.tipoDespesaSelecionada)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Tipo Despesa deletada com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar o tipo despesa.')
  }

  imprimeRelatorio(){
    return this.tipoDespesaservice.downloadPdfRelatorio();
  }
}
