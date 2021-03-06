import { Component, OnInit } from '@angular/core';
import { ordemServicoBusca} from './ordemServicoBusca';
import { OrdemServicoService } from '../../ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-lista',
  templateUrl: './ordem-servico-lista.component.html',
  styleUrls: ['./ordem-servico-lista.component.css']
})
export class OrdemServicoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ordemServicoBusca[];
  message: string;

  constructor(private service: OrdemServicoService)
  {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }


  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.nome, this.mes)
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
