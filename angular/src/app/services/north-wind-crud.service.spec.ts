import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthWindCRUDService } from './north-wind-crud.service';

describe('NorthWindCRUDService', () => {
  let service: NorthWindCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthWindCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
