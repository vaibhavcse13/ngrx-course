import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';


// action creator use to create new action
export const login = createAction('[Login Component] User  Login' ,
  props<{user: User}>()
  );

// Logout action
export const logout = createAction('[Top Menu] user Logout' );
