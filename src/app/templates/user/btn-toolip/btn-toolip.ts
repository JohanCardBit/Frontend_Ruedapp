import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estaciones } from '../../../models/estacion/estaciones';

@Component({
  selector: 'app-btn-toolip',
  imports: [],
  templateUrl: './btn-toolip.html',
  styleUrl: './btn-toolip.css'
})

export class BtnToolip {
  @Input() data!: Estaciones

  @Output() seleccionar = new EventEmitter<string>()
  seleccionado(){
    this.seleccionar.emit(this.data._id)
  }

  
}
