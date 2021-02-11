import { UsuarioModel } from './../../models/usuarios.model';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface UsuariosState {
  users: UsuarioModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,
  on(actions.cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(actions.cargarUsuariosSuccess, (state, { usuarios }) => ({ ...state, loading: false, loaded: true, users: [...usuarios] })),
  on(actions.cargarUsuariosError, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload }))
);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
