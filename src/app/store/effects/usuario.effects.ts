import { UsuarioService } from 'src/app/services/usuario.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as usuarioActions from '../actions';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private usuarioService: UsuarioService) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap((actions) =>
        this.usuarioService.getUser(actions.id).pipe(
          map((user) => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
          catchError((err) => of(usuarioActions.cargarUsuarioError({ payload: err })))
        )
      )
    )
  );
}
