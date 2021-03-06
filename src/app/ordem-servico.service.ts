import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { OrdemServico } from './ordem-servico/OrdemServico';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ordemServicoBusca } from './ordem-servico/ordem-servico-lista/ordemServicoBusca';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  apiURL: string =  environment.apiURLBase + '/api/ordens-servicos';

  constructor(private http: HttpClient) { }

  salvar(ordemServico: OrdemServico): Observable<OrdemServico>{
    return this.http.post<OrdemServico>(this.apiURL, ordemServico);
  }

  buscar(nome: string, mes: number): Observable<ordemServicoBusca[]>{

    const httpParams = new HttpParams()
      .set('nome', nome)
      .set('mes', mes ?  mes.toString() : '');

    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

}


