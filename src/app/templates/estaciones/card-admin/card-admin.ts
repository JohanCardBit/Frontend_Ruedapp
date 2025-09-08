import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estaciones } from '../../../models/estacion/estaciones';

@Component({
  selector: 'app-card-admin',
  imports: [],
  templateUrl: './card-admin.html',
  styleUrl: './card-admin.css'
})
export class CardAdmin {
  @Input() data!: Estaciones

  @Output() editEstacion = new EventEmitter;
  editarEstacion() {
    this.editEstacion.emit()
  }

  @Output() abrirEstado = new EventEmitter<string>();

  abrirModalEstado(id: string) {
    this.abrirEstado.emit(id);
  }



}
