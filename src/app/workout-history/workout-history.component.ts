import { Component, OnInit } from '@angular/core';
import { WorkoutLogEntry, WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
import { Location } from '@angular/common';

@Component({
  selector: 'abe-workout-history',
  templateUrl: './workout-history.component.html',
  styles: [
  ]
})
export class WorkoutHistoryComponent implements OnInit {
  history: Array<WorkoutLogEntry> = [];
  completed: boolean;

  constructor(private tracker: WorkoutHistoryTrackerService, private location: Location) { }

  ngOnInit(): void {
    this.history = this.tracker.getHistory();
  }

  goBack() {
    this.location.back();
  }

  addLog() {
    this.history.push(Object.assign({}, this.history[this.history.length - 1]));
  }
}
