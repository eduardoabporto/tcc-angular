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
          .getEmpresa()
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

  calcDiff(date1, date2) {
    var d1 = date1.split(' ')[0]; // Data 1
    var t1 = date1.split(' ')[1]; // Tempo data 1

    var d2 = date2.split(' ')[0]; // Data 2
    var t2 = date2.split(' ')[1]; // Tempo data 2

    // Converte cada um para datetime
    d1 = new Date(d1.split('/')[0], d1.split('/')[1], d1.split('/')[2], t1.split(':')[0], t1.split(':')[1]);
    d2 = new Date(d2.split('/')[0], d2.split('/')[1], d2.split('/')[2], t2.split(':')[0], t2.split(':')[1]);

    // Diferença entre os datetimes
    var diffMs = (d2 - d1);

    // Calcula diferença de hrs em ms
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);

    // Calcula diferença de mins em ms
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    // Concatena
    var diff = diffHrs + ':' + diffMins;
    console.log(diff);
  }

}
