import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Projeto } from './projeto/Projeto';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { projetoBusca } from './projeto/projeto-lista/projetoBusca';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  apiURL: string =  environment.apiURLBase + '/api/projeto';

  constructor(private http: HttpClient) { }

  salvar(projeto: Projeto): Observable<Projeto>{
    return this.http.post<Projeto>(this.apiURL, projeto);
  }

  buscar(nome: string): Observable<projetoBusca[]>{

    const httpParams = new HttpParams()
      .set('nome', nome);

    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

  getProjetoClienteById(numCliente: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('numCliente', String(numCliente));
    const url = this.apiURL + '/form/' + '?' + httpParams;
    return this.http.get<any>(url);
  }

  getProjeto(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiURL);
  }

}


