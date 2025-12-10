import { TestBed } from '@angular/core/testing';

// AQUÍ ESTABA EL ERROR: Cambiamos 'Data' por 'DataService'
import { DataService } from './data'; 

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});