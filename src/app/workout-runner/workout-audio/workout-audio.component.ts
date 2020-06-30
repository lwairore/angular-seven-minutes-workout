import { Component, OnInit, ViewChild, AfterViewChecked, Inject, forwardRef } from '@angular/core';
import { MyAudioDirective } from '../../shared/my-audio.directive';
import { ExerciseChangeEvent, ExerciseProgressEvent, ExercisePlan } from '../../core/model';
import { WorkoutRunnerComponent } from '../workout-runner.component'

@Component({
  selector: 'abe-workout-audio',
  templateUrl: './workout-audio.component.html',
  styles: [
  ]
})
export class WorkoutAudioComponent implements OnInit, AfterViewChecked {
  @ViewChild('ticks', { static: true }) private ticks: MyAudioDirective;
  @ViewChild('nextUp', { static: true }) private nextUp: MyAudioDirective;
  @ViewChild('nextUpExercise', { static: true }) private nextUpExercise: MyAudioDirective;
  @ViewChild('halfway', { static: true }) private halfway: MyAudioDirective;
  @ViewChild('aboutToComplete', { static: true }) private aboutToComplete: MyAudioDirective;

  public nextupSound: string;
  private subscriptions: Array<any>;

  // constructor(@Inject(forwardRef(() => WorkoutRunnerComponent))
  // private runner: WorkoutRunnerComponent) {
  //   this.subscriptions = [
  //     this.runner.exercisePaused.subscribe((exercise: ExercisePlan) =>
  //       this.stop()),
  //     this.runner.workoutComplete.subscribe((exercise: ExercisePlan) =>
  //       this.stop()),
  //     this.runner.exerciseResumed.subscribe((exercise: ExercisePlan) =>
  //       this.resume()),
  //     this.runner.exerciseProgress.subscribe((progress: ExerciseProgressEvent) =>
  //       this.onExerciseProgress(progress)),

  //     this.runner.exerciseChanged.subscribe((state: ExerciseChangeEvent) =>
  //       this.onExerciseChanged(state))];
  // }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    // this.ticks.start();
    // console.log('After view checked', this.ticks)
  }



  stop() {
    console.log(this.ticks.stop())
    this.ticks.stop();
    this.nextUp.stop();
    this.halfway.stop();
    this.aboutToComplete.stop();
    this.nextUpExercise.stop();
  }

  resume() {
    this.ticks.start();
    if (this.nextUp.currentTime > 0 && !this.nextUp.playbackComplete) {
      this.nextUp.start();
    }
    else if (this.nextUpExercise.currentTime > 0 && !this.nextUpExercise.playbackComplete) {
      this.nextUpExercise.start();
    }
    else if (this.halfway.currentTime > 0 && !this.halfway.playbackComplete) {
      this.halfway.start();
    }
    else if (this.aboutToComplete.currentTime > 0 && !this.aboutToComplete.playbackComplete) {
      this.aboutToComplete.start();
    }
  }

  onExerciseProgress(progress: ExerciseProgressEvent) {
    if (progress.runningFor === Math.floor(progress.exercise.duration / 2)
      && progress.exercise.exercise.name != 'rest') {
      this.halfway.start();
    }
    else if (progress.timeRemaining === 3) {
      this.aboutToComplete.start();
    }
  }

  onExerciseChanged(state: ExerciseChangeEvent) {
    if (state.current.exercise.name === 'rest') {
      this.nextupSound = state.next.exercise.nameSound;
      setTimeout(() => this.nextUp.start(), 2000);
      setTimeout(() => this.nextUpExercise.start(), 3000)
    }
  }

}
