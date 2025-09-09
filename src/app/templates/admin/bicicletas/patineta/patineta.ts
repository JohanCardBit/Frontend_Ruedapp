import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataBicicletas } from '../../../../models/bicicletas/data-bicicletas';

@Component({
  selector: 'app-patineta',
  imports: [],
  templateUrl: './patineta.html',
  styleUrl: './patineta.css'
})
export class Patineta {
  @Input() data!: DataBicicletas

  @Output() editPatineta = new EventEmitter
  
  editarPatineta(){
    this.editPatineta.emit()
  }
}
