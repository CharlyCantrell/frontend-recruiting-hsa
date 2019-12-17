import { TestBed } from '@angular/core/testing';

import { ConsultaGitHubService } from './consulta-git-hub.service';

describe('ConsultaGitHubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaGitHubService = TestBed.get(ConsultaGitHubService);
    expect(service).toBeTruthy();
  });
});
