import { UsuarioModel } from './../../models/usuarios.model';
import { createAction, props } from '@ngrx/store';

export const cargarUsuario = createAction('[Usuario] Cargar Usuario', props<{ id: string }>());
export const cargarUsuarioSuccess = createAction('[Usuario] Cargar Usuario Success', props<{ usuario: UsuarioModel }>());
export const cargarUsuarioError = createAction('[Usuario] Cargar Usuario Error', props<{ payload: any }>());
