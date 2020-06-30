import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutContainerComponent } from './workout-runner/workout-container/workout-container.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
// import {} from './workout-builder/workout-builder.module'

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'workout', component: WorkoutContainerComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'history', component: WorkoutHistoryComponent },
  { path: 'builder', loadChildren: () => import('./workout-builder/workout-builder.module').then(m => m.WorkoutBuilderModule) },
  { path: '**', redirectTo: '/start' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
