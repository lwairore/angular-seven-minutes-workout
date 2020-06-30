import { TestBed } from '@angular/core/testing';

import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';

describe('WorkoutHistoryTrackerService', () => {
  let service: WorkoutHistoryTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutHistoryTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
