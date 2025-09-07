import { Component, inject } from '@angular/core';
import { CardAdmin } from '../../../templates/estaciones/card-admin/card-admin';
import { EstacionesService } from '../../../services/estaciones/estaciones.service';
import { FormGroup } from '@angular/forms';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-estaciones',
  imports: [CardAdmin],
  templateUrl: './estaciones.html',
  styleUrl: './estaciones.css'
})
export class Estaciones {
  dataEstaciones!: any[];
  estacionesService = inject(EstacionesService)
  formEstaciones!: FormGroup
  idEstaciones!: ""


  renderEstaciones() {
    this.estacionesService.getEstaciones().subscribe({
      next: (dataApi: any) => {
        this.dataEstaciones = dataApi
        flashy(`${dataApi.length} Estaciones cargadas correctamente!`, {
          type: 'success',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',

        });
      },

      error: (error: any) => {
        console.log(error);
        
        flashy(`${error.error?.msj || 'Error al cargar categorías'}`, {
          type: 'error',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#ef4444;">   <path stroke-linecap="round" stroke-linejoin="round"          d="M6 18L18 6M6 6l12 12" />   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/> </svg>',
        });
      }

    });
  }

  ngOnInit() {
 this.renderEstaciones()

  }
}
