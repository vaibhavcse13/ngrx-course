import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from './actions.type';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {

  constructor(private actions$ : Actions , private router: Router) {

    /*actions$.subscribe(action => {
       if (action.type === '[Login Component] User  Login')  {
         localStorage.setItem('user' , JSON.stringify(action['user']));
       }
     });*/
  }

  logins$ =  createEffect(() => {
     return this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => localStorage.setItem('user' ,JSON.stringify( action.user)))
    );
  } , {dispatch:false});

  logout$ =  createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(action => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login')

      })
    );
  } , {dispatch:false});
}
