import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {AppState} from '../reducers';
import { finalize, first, tap, filter } from 'rxjs/operators';
import {loadAllCourses, allCoursesLoaded} from './course.action';
import { areCoursesLoaded } from './coures.selectors';


@Injectable()
export class CoursesResolver implements Resolve<any>{

  private _loading: boolean ;
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    /*
        Check in store that course is available
     */
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((coursesLoaded) => {

        if (!this._loading && !coursesLoaded) {
          this._loading = true;
          this.store.dispatch(loadAllCourses());
        }

      }) ,
      filter(coursesLoaded => coursesLoaded),
      first() ,
      finalize(() => this._loading = false)
    );
  }


}
