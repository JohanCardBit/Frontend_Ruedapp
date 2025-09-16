import { Component, Input } from '@angular/core';

import { DataBicicletas } from '../../../models/bicicletas/data-bicicletas';

@Component({
  selector: 'app-card-patineta',
  imports: [],
  templateUrl: './card-patineta.html',
  styleUrl: './card-patineta.css'
})
export class CardPatineta {
  @Input() data!: DataBicicletas

}
