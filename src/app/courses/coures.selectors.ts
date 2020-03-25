
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './reducers/courses.reducer';
import * as fromCourse from './reducers/courses.reducer';

//Creating feature selector
export const selectCourseState = createFeatureSelector<CoursesState>('courses');

export const selectAllCourse = createSelector(
  selectCourseState ,
  fromCourse.selectAll
);

export const selectBegnierCourse = createSelector(
  selectAllCourse ,
  course => course.filter( course => course.category === 'BEGINNER')
);

export const selectAdvanceCourse = createSelector(
  selectAllCourse ,
  course => course.filter( course => course.category === 'ADVANCED')
);

export const selectPromototal = createSelector(
  selectAllCourse ,
  course => course.filter( course => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCourseState ,
  state => state.allCoursesLoaded
);

