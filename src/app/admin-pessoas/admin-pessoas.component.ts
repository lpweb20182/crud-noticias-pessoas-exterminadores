import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pessoas',
  templateUrl: './admin-pessoas.component.html',
  styleUrls: ['./admin-pessoas.component.css']
})
export class AdminPessoasComponent implements OnInit {
  pessoas$ = null;
  excluir_ok = false;
  excluir_erro = false;
  
  constructor(private service: AutoresService, private router: Router) { }

  ngOnInit() {
    this.pessoas$ = this.service.todos();
  }

  excluir(pessoa) {
    if (confirm(`Tem certeza que deseja excluir essa pessoa: ${pessoa.nome} ?`)) {
      this.service.excluir(pessoa.id).subscribe(
        pessoa => {
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
