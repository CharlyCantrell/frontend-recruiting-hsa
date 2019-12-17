import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios'


@Injectable({
  providedIn: 'root'
})
export class ConsultaGitHubService {
   constructor(private http: HttpClient) {}
  GetUsuario (UsuBusqueda) {
    // return this.http.get<Usuarios[]>('https://api.github.com/users/' + UsuBusqueda);
    return this.http.get ('https://api.github.com/users/' + UsuBusqueda);

  }
  GetRepoUsuarios (UsuBusqueda){
    return this.http.get ('https://api.github.com/users/' + UsuBusqueda + '/repos');
  }
}