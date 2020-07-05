import { Injectable } from '@angular/core';
import { WorkoutPlan, ExercisePlan } from '../../core/model';
import { WorkoutService } from '../../core/workout.service'

@Injectable()
export class WorkoutBuilderService {
  buildingWorkout: WorkoutPlan;
  newWorkout: boolean;
  firstExercise = true;
  initialWorkoutPlanName: string;

  constructor(public _workoutService: WorkoutService) { }

  startBuildingNew() {
    const exerciseArray: ExercisePlan[] = [];
    this.buildingWorkout = new WorkoutPlan('', '', 30, exerciseArray);
    this.newWorkout = true;
    return this.buildingWorkout;
  }
  startBuildingExisting(name: string) {
    this.newWorkout = false;
    return this._workoutService.getWorkout(name);
  }

  removeExercise(exercise: ExercisePlan) {
    const currentIndex = this.buildingWorkout.exercises
      .map(function (e) { return e.exercise.name; })
      .indexOf(exercise.exercise.name);
    this.buildingWorkout.exercises.splice(currentIndex, 1);
  }

  save() {
    let workout = this.newWorkout ?
      this._workoutService.addWorkout(this.buildingWorkout) :
      this._workoutService.updateWorkout(this.initialWorkoutPlanName, this.buildingWorkout);
    this.newWorkout = false;
    return workout;
  }

  delete() {
    return this._workoutService.deleteWorkout(this.buildingWorkout.name);
  }

  addExercise(exercisePlan: ExercisePlan) {
    if (this.newWorkout && this.firstExercise) {
      this.buildingWorkout.exercises.splice(0, 1);
      this.firstExercise = false;
    }
    this.buildingWorkout.exercises.push(exercisePlan);
  }

  moveExerciseTo(exercise: ExercisePlan, toIndex: number) {
    if (toIndex < 0 || toIndex >= this.buildingWorkout.exercises.length) { return; }
    const currentIndex = this.buildingWorkout.exercises.indexOf(exercise);
    this.buildingWorkout.exercises.splice(toIndex, 0, this.buildingWorkout.exercises.splice(currentIndex, 1)[0]);
  }
}
