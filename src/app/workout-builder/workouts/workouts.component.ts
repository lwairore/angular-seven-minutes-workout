import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutPlan } from '../../core/model';
import { WorkoutService } from '../../core/workout.service';

@Component({
  selector: 'abe-workouts',
  templateUrl: './workouts.component.html',
  styles: [
  ]
})
export class WorkoutsComponent implements OnInit {
  workoutList: Array<WorkoutPlan> = [];

  constructor(
    private router: Router,
    public workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    this.workoutService.getWorkouts()
      .subscribe(
        workouts => { this.workoutList = workouts; },
        (err: any) => console.error
      )
  }

  onSelect(workout: WorkoutPlan) {
    this.router.navigate(['./builder/workout', workout.name]);
  }

}
