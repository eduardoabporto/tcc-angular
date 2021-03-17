import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Usuario} from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.apiURLBase + '/api/usuario';

  constructor(private http: HttpClient) {
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}`, usuario);
  }

  atualizar(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}`, usuario);
  }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  getUsuarioByUser(nomeUser: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('nomeUser', nomeUser);
    const url = this.apiURL + '/form/' + '?' + httpParams;
    return this.http.get<any>(url);
  }
    deletar(usuario: Usuario): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${usuario.id}`);
  }

}
