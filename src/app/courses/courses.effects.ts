import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAllCourses, allCoursesLoaded } from './course.action';
import { CourseActions } from './actions.type';
import { CoursesHttpService } from './services/courses-http.service';
import { concatMap, map } from 'rxjs/operators';
import { Course } from './model/course';


@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions ,
              private courseService : CoursesHttpService
    ) {};

  loadAllCourses$ =  createEffect(
    () =>  this.actions$
    .pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap( action => this.courseService.findAllCourses()),
    map(course => allCoursesLoaded({course}))
    )
  );
}
