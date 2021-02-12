import { cargarUsuarios } from './../../store/actions/usuarios.actions';
import { AppState } from './../../store/app.reducer';
import { UsuarioModel } from './../../models/usuarios.model';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioModel[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users }) => this.usuarios = users);
    this.store.dispatch(cargarUsuarios());
  }
}
