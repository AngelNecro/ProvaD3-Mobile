import { Component, OnInit } from '@angular/core';
import { pessoas } from './../pessoa.model'
import { PessoaServicoService } from '../pessoa-servico.service';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {

  constructor(private PessoaServicoService: PessoaServicoService) { }

  ngOnInit() {
  }

  pessoa: pessoas = {} as pessoas;

  processar(form) {
    this.PessoaServicoService.inserirPessoa(form.value)
  }

}
