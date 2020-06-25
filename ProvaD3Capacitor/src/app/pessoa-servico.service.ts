import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PessoaServicoService {

  constructor(private storage: Storage) { }

  async InsertPessoa(dados) {
    const pessoas: any[] = (await this.storage.get("pessoas"));
    dados.id = pessoas.length + 1;
    return this.storage.set("pessoas", [...pessoas, dados]);
  }

  async getId(id) {
    const pessoas: any[] = (await this.storage.get("pessoas"));
    return pessoas.find((pessoa) => pessoa.id == id);
  }

  async getSaudeMental(saudeMental) {
    const pessoas: any[] = (await this.storage.get("pessoas"));
    return pessoas.filter((pessoa) => pessoa.saudeMental == saudeMental);
  }
}
