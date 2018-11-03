import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-editar-pessoa',
  templateUrl: './admin-editar-pessoa.component.html',
  styleUrls: ['./admin-editar-pessoa.component.css']
})
export class AdminEditarPessoaComponent implements OnInit {
  pessoa = null;
  pessoa_erro = false;
  update_ok = false;
  update_erro = false;

  constructor(private autores_service: AutoresService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.autores_service.encontrar(Number.parseInt(id))
    .subscribe(pessoa => {
      if (!pessoa) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.pessoa = pessoa;
      }
    },
    erro => this.pessoa_erro = true);
  }

  editar(id: number, nome:string, email: string) {
    this.autores_service.editar(id, nome, email).subscribe(
      pessoa => {
        this.update_ok = true;
      },
      erro => {
        console.log(erro);
        this.update_erro = true;
      }
    )
  }

}
