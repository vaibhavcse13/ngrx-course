import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../actions.type';
/*import { environment } from '../../environments/environment';*/

export interface AuthState {
  user: User;
}

// defining initial state
export const initialState =  { user : null};
/*export const reducers: ActionReducerMap<AuthState> = {

};*/

export const authReducer = createReducer(initialState ,
  on(AuthActions.login , (state , action ) => {
       return { ...state , user : action.user};
  }),
  on(AuthActions.logout , (state , action) => {
    return {...state , user : null}
  })

);

/*export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];*/
