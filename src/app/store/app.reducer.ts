import { ActionReducerMap } from '@ngrx/store';
import * as reducer from './reducers/usuarios.reducer';

export interface AppState {
  usuarios: reducer.UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: reducer.usuariosReducer,
};
