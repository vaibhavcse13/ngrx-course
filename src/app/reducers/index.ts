import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {routerReducer} from '@ngrx/router-store';
import {logger} from 'codelyzer/util/logger';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export  function mlogger(reducer: ActionReducer<any>) : ActionReducer<any>{

  return (state , action ) =>{
    console.log(" State Before :: " , state);
    console.log(" Actions :: " , action)

    return reducer(state , action);
  }

}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [mlogger ] : [];
