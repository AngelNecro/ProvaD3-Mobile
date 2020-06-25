import { TestBed } from '@angular/core/testing';

import { PessoaServicoService } from './pessoa-servico.service';

describe('PessoaServicoService', () => {
  let service: PessoaServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
