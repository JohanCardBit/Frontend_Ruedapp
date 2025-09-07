import { Component, Input } from '@angular/core';
import { Estaciones } from '../../../models/estacion/estaciones';

@Component({
  selector: 'app-card-admin',
  imports: [],
  templateUrl: './card-admin.html',
  styleUrl: './card-admin.css'
})
export class CardAdmin {
  @Input() data!: Estaciones
}
