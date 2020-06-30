import { map } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { WorkoutPlan } from '../../core/model';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';

@Injectable()
export class WorkoutResolver implements Resolve<WorkoutPlan> {
    public workout: WorkoutPlan;

    constructor(
        public workoutBuilderService: WorkoutBuilderService,
        public router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): WorkoutPlan {
        let workoutName = route.paramMap.get('id');

        if (!workoutName) {
            workoutName = '';
        }

        this.workout = this.workoutBuilderService.startBuilding(workoutName);

        if (this.workout) {
            return this.workout;
        } else {
            // workoutName not 
            this.router.navigate(['/builder/workouts']);
            return null;
        }
    }
}