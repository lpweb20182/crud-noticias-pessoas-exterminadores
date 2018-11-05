import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-noticias',
  templateUrl: './admin-noticias.component.html',
  styleUrls: ['./admin-noticias.component.css']
})
export class AdminNoticiasComponent implements OnInit {
  noticias$ = null;
  excluir_ok = false;
  excluir_erro = false;
  
  constructor(private service: NoticiasService, private router: Router) { }

  ngOnInit() {
    this.noticias$ = this.service.todas();
  }
  
  excluir(noticia) {
    if (confirm(`Tem certeza que deseja excluir essa pessoa: ${noticia.titulo} ?`)) {
      this.service.excluir(noticia.id).subscribe(
        noticia => {
          this.excluir_ok = true;
        },
        erro => {
          console.log(erro);
          this.excluir_erro = true;
        }
      )
    }
  }
}
