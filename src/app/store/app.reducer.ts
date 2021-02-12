import { ActionReducerMap } from '@ngrx/store';
import * as reducer from './reducers';

export interface AppState {
  usuarios: reducer.UsuariosState;
  usuario: reducer.UsuarioState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: reducer.usuariosReducer,
  usuario: reducer.UsuarioReducer,
};
