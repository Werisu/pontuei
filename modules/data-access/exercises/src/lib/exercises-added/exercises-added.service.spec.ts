import { TestBed } from '@angular/core/testing';

import { ExercisesAddedService } from './exercises-added.service';

describe('ExercisesAddedService', () => {
  let service: ExercisesAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisesAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
