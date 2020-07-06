import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Exercise } from '../../core/model';
import { ExerciseBuilderService } from '../builder-services/exercise-builder.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ExerciseResolver implements Resolve<Exercise> {
    public exercise: Exercise;

    constructor(
        public exerciseBuilderService: ExerciseBuilderService,
        public router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Exercise> {
        const exerciseName = route.paramMap.get('id');

        if (!exerciseName) {
            return of(this.exerciseBuilderService.startBuildingNew());
        } else {
            return this.exerciseBuilderService.startBuildingExisting(exerciseName)
                .pipe(
                    map(exercise => {
                        if (exercise) {
                            this.exerciseBuilderService.buildingExercise = exercise;
                            this.exerciseBuilderService.initialExerciseName = exerciseName;
                            return exercise;
                        } else {
                            this.router.navigate(['/builder/exercises']);
                            return null;
                        }
                    }),
                    catchError(error => {
                        console.log('An error occurred!');
                        this.router.navigate(['/builder/exercises/exercise-not-found']);
                        return of(null);
                    })
                );
        }
    }
}