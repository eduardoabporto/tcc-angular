import {Injectable} from '@angular/core';
import {Empresa} from './empresa/empresa';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  apiURL: string = environment.apiURLBase + '/api/empresa';

  constructor(private http: HttpClient) {
  }

  salvar(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(`${this.apiURL}`, empresa);
  }

  atualizar(empresa: Empresa): Observable<any> {
    return this.http.put<Empresa>(`${this.apiURL}/${empresa.id}`, empresa);
  }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiURL);
  }


  getEmpresaById(id: number): Observable<Empresa> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(empresa: Empresa): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${empresa.id}`);
  }

  downloadPdfRelatorio(){
    return this.http.get(this.apiURL + '/relatorio', {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }
}
