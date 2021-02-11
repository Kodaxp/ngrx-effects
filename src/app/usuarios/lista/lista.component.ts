import { UsuarioModel } from './../../models/usuarios.model';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioModel[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.usuarioService.getUser().subscribe((users) => {
    //   console.log(users);
    //   this.usuarios = users;
    // });
  }
}
