import { map, catchError } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { WorkoutPlan } from '../../core/model';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class WorkoutResolver implements Resolve<WorkoutPlan> {
    public workout: WorkoutPlan;

    constructor(
        public workoutBuilderService: WorkoutBuilderService,
        public router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<WorkoutPlan> {
        const workoutName = route.paramMap.get('id');

        if (!workoutName) {
            return of(this.workoutBuilderService.startBuildingNew());
        } else {
            return this.workoutBuilderService.startBuildingExisting(workoutName)
                .pipe(
                    map(workout => {
                        if (workout) {

                            this.workoutBuilderService.buildingWorkout = workout;
                            this.workoutBuilderService.initialWorkoutPlanName = workoutName;
                            return workout;
                        } else {
                            this.router.navigate(['/builder/workouts/workout-not-found']);
                            return null;
                        }
                    }),
                    catchError(error => {
                        console.log('An error occurred!');
                        this.router.navigate(['/builder/workouts']);
                        return of(null);
                    })
                );
        }
    }
}