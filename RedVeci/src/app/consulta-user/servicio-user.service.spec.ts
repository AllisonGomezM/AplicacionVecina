import { TestBed } from '@angular/core/testing';

import { ServicioUserService } from './servicio-user.service';

describe('ServicioUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioUserService = TestBed.get(ServicioUserService);
    expect(service).toBeTruthy();
  });
});
