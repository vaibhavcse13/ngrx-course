import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';


export const loadAllCourses =  createAction( '[Courses Resolver] Load Courses');

export const allCoursesLoaded = createAction('[Load Courses Effects] All Courses Loaded' ,
props<{course: Course[] }>()
);

