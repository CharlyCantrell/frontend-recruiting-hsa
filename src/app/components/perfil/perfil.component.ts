import { Component, OnInit, Input } from '@angular/core';
import { ConsultaGitHubService} from '../../services/consulta-git-hub.service';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() txtUsuBusqueda: String;
  
//  public usuario: Usuarios[]=[];
  usuario: any = null;
  EstConsul:boolean=false;
  Notfnd:boolean=false;  
  currentRepoUsuario: any = null;

  constructor(public ConsultaGitHubService: ConsultaGitHubService) { }
  ngOnInit() { this.FBuscausuario(); }  
  click() {   
     this.FBuscausuario();
  }
  FBuscausuario(){
    this.ConsultaGitHubService.GetUsuario(this.txtUsuBusqueda)
    .subscribe(      
      ListaUsuarios => {
//      this.usuario = <Usuarios[]>ListaUsuarios;
      this.usuario = ListaUsuarios;      
      console.log(this.usuario);
      this.EstConsul = true;   
      this.Notfnd = false;
      },
      err => {console.log(err);
        this.EstConsul = false;
        this.Notfnd = true;
      }
    ) 
    this.ConsultaGitHubService.GetRepoUsuarios(this.txtUsuBusqueda)
    .subscribe(
      ListaRepoUsuario => {
        console.log(ListaRepoUsuario);
        this.currentRepoUsuario = ListaRepoUsuario;        
        this.currentRepoUsuario.sort(function (a, b) {
          return b.stargazers_count - a.stargazers_count;
        });
      },
      err => {
        console.log(err);
      }
    )
  } 
}