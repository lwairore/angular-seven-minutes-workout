import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';
import { WorkoutContainerComponent } from './workout-container/workout-container.component';


@NgModule({
  declarations: [WorkoutRunnerComponent, ExerciseDescriptionComponent, VideoPlayerComponent, WorkoutAudioComponent, WorkoutContainerComponent,],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WorkoutRunnerComponent,
  ],
})
export class WorkoutRunnerModule { }
