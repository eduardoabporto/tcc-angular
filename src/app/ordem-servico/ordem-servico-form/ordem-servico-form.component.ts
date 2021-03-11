import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../clientes/cliente';
import {ClientesService} from '../../clientes.service';
import {OrdemServico} from '../OrdemServico';
import {OrdemServicoService} from '../../ordem-servico.service';
import {Projeto} from '../../projeto/Projeto';
import {ProjetoService} from '../../projeto.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {EmpresaService} from '../../empresa.service';
import {Empresa} from '../../empresa/empresa';


@Component({
  selector: 'app-ordem-servico-form',
  templateUrl: './ordem-servico-form.component.html',
  styleUrls: ['./ordem-servico-form.component.css']
})
export class OrdemServicoFormComponent implements OnInit {

  empresa: Empresa[] = [];
  clientes: Cliente[] = [];
  projeto: Projeto[] = [];
  servico: OrdemServico;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private empresaService: EmpresaService,
    private clienteService: ClientesService,
    private ordemService: OrdemServicoService,
    private projetoService: ProjetoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.servico = new OrdemServico();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.ordemService
          .getOrdemServicoById(this.id)
          .subscribe(response => this.servico = response,
            errorResponse => this.servico = new OrdemServico());
      } else {
        this.empresaService
          .getClientes()
          .subscribe(response => this.empresa = response);
        this.clienteService
          .getClientes()
          .subscribe(response => this.clientes = response);

      }
    });
  }

  consultarProjeto(idCliente: number){
    this.projetoService
      .getProjetoClienteById(this.servico.idCliente)
      .subscribe(response => this.projeto = response);
  }

  onSubmit() {
    this.ordemService
      .salvar(this.servico)
      .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.servico = new OrdemServico();
        },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
  }
}
