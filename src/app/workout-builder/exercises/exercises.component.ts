import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Exercise } from '../../core/model';
import { WorkoutService } from '../../core/workout.service';

@Component({
  selector: 'abe-exercises',
  templateUrl: './exercises.component.html',
  styles: [
  ]
})
export class ExercisesComponent implements OnInit, OnDestroy {
  exerciseList: Array<Exercise> = [];
  notFound: boolean = false;
  subscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.url[1] && this.route.snapshot.url[1].path === 'exercise-not-found') {
      this.notFound = true
    }
    this.subscription = this.workoutService.getExercises()
      .subscribe(
        exercises => this.exerciseList = exercises,
        (err: any) => console.error
      )
  }
  onSelect(exercise: Exercise) {
    this.router.navigate(['./builder/exercise', exercise.name]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
