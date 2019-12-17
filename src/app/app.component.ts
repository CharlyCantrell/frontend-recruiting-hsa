import { Component, OnInit } from '@angular/core';
import { ConsultaGitHubService} from './services/consulta-git-hub.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  BusqIni:boolean=true;
  EstConsul:boolean=false;
  txtUsuBusqueda:string;
    
  constructor(public ConsultaGitHubService: ConsultaGitHubService) { }
  ngOnInit() { }  
  click() {   
     this.FBuscausuario();
  }
  
  FBuscausuario(){
      this.EstConsul = true;   
      this.BusqIni = false;
  } 
}
