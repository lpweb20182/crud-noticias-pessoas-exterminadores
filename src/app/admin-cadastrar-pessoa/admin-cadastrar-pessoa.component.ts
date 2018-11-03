import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-admin-cadastrar-pessoa',
  templateUrl: './admin-cadastrar-pessoa.component.html',
  styleUrls: ['./admin-cadastrar-pessoa.component.css']
})
export class AdminCadastrarPessoaComponent implements OnInit {
  nome = null;
  email = null;
  salvar_ok = false;
  salvar_erro = false;

  constructor(private autores_service: AutoresService) { }

  ngOnInit() {
  }

  salvar() {
    this.autores_service.salvar(this.nome, this.email).subscribe(
      pessoa => {
        this.salvar_ok = true;
      },
      erro => {
        console.log(erro);
        this.salvar_erro = true;
      }
    )
  }
}
