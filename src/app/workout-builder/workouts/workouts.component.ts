import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WorkoutPlan } from '../../core/model';
import { WorkoutService } from '../../core/workout.service';

@Component({
  selector: 'abe-workouts',
  templateUrl: './workouts.component.html',
  styles: [
  ]
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  workoutList: Array<WorkoutPlan> = [];
  public notFound: boolean = false;
  private subscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.url[1] && this.route.snapshot.url[1].path === 'workout-not-found') {
      this.notFound = true;
    }
    this.subscription = this.workoutService.getWorkouts()
      .subscribe(
        workouts => { this.workoutList = workouts; },
        (err: any) => console.error
      )
  }

  onSelect(workout: WorkoutPlan) {
    this.router.navigate(['./builder/workout', workout.name]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
