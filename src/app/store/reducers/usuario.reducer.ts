import { UsuarioModel } from './../../models/usuarios.model';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface UsuarioState {
  users: UsuarioModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UsuarioInitialState: UsuarioState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _UsuarioReducer = createReducer(
  UsuarioInitialState,
  on(actions.cargarUsuario, (state, { id }) => ({ ...state, loading: true, id })),
  on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({ ...state, loading: false, loaded: true, user: { ...usuario } })),
  on(actions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.url, name: payload.name, message: payload.message },
  }))
);

export function UsuarioReducer(state, action) {
  return _UsuarioReducer(state, action);
}
