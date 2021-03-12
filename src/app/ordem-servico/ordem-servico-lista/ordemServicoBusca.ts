import { Cliente } from '../../clientes/cliente';
import { Projeto } from '../../projeto/Projeto';
import {Empresa} from '../../empresa/empresa';

export class ordemServicoBusca {
  assunto: string;
  data: string;
  projeto: Projeto;
  empresa: Empresa;
  cliente: Cliente;
}
