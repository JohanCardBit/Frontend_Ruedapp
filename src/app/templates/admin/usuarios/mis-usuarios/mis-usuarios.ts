import { Component, Input } from '@angular/core';
import { DataUsuarios } from '../../../../models/usuarios/data-usuarios';

@Component({
  selector: 'app-mis-usuarios',
  imports: [],
  templateUrl: './mis-usuarios.html',
  styleUrl: './mis-usuarios.css'
})
export class MisUsuariosTemplate {
@Input() data!: DataUsuarios
}
