import { TestBed } from '@angular/core/testing';

import { ExerciseBuilderService } from './exercise-builder.service';

describe('ExerciseBuilderService', () => {
  let service: ExerciseBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
