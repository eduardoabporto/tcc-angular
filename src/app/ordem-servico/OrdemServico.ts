import {Empresa} from '../empresa/empresa';
import {Cliente} from '../clientes/cliente';
import {Projeto} from '../projeto/Projeto';

export class OrdemServico{
  id: number;
  assunto:string;
  descricao:string;
  data:string;
  horaInicial:string;
  horaFinal:string;
  horaTrab:string;
  horaTrasl:string;
  horaDesc:string;
  idEmpresa:number;
  idProjeto:number;
  idCliente:number;
  idRecurso:number;
  empresa: Empresa;
  cliente: Cliente;
  projeto: Projeto;
}

