import {createFeatureSelector, createSelector, select} from '@ngrx/store';
import {AuthState} from './reducers';


// Feature selector to select the AuthState
export const selectAuthState = createFeatureSelector<AuthState>('auth')

// This is memoized function.
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);


// Logged out selector
export const isLoggedOut = createSelector(
  isLoggedIn ,
  loggedIn => !loggedIn
);

