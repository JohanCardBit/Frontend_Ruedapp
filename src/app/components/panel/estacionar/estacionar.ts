import { Component, inject } from '@angular/core';
import { CardEstacionU } from '../../../templates/user/card-estacion-u/card-estacion-u';
import { EstacionesService } from '../../../services/estaciones/estaciones.service';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-estacionar',
  imports: [CardEstacionU],
  templateUrl: './estacionar.html',
  styleUrl: './estacionar.css'
})
export class Estacionar {

  dataEstacionesu!: any[]
  estacionesService = inject(EstacionesService)

  //RENDER
  renderEstaciones() {
    this.estacionesService.getEstaciones().subscribe({
      next: (dataApi: any) => {
        this.dataEstacionesu = dataApi
      },

      error: (error: any) => {
        console.log(error);

        flashy(`${error.error?.msj || 'Error al cargar estaciones'}`, {
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
