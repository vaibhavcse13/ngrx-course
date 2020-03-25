
import { Course, compareCourses } from './../model/course';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer , on } from '@ngrx/store';
import { CourseActions } from '../actions.type';


export interface CoursesState extends EntityState<Course> {
   allCoursesLoaded: boolean
}


export const adapter = createEntityAdapter<Course>({
  sortComparer:  compareCourses ,
  selectId : course => course.seqNo
});


export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded:false
});


export const coursesReducer = createReducer(

  initialCoursesState,

  on(CourseActions.allCoursesLoaded,
      (state, action) => adapter.addAll(
          action.course,
          {...state  , allCoursesLoaded: true}
      )),

);


export const {
  selectAll
} = adapter.getSelectors()
