import { Component, inject } from '@angular/core';
import { BtnToolip } from '../../../templates/user/btn-toolip/btn-toolip';
import { CardPatineta } from "../../../templates/user/card-patineta/card-patineta";
import { EstacionesService } from '../../../services/estaciones/estaciones.service';
import flashy from '@pablotheblink/flashyjs';
import { BicicletasService } from '../../../services/bicicletas/bicicletas.service';

@Component({
  selector: 'app-inicio',
  imports: [BtnToolip, CardPatineta],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  dataEstacions: any[] = [];
  estacionesServics = inject(EstacionesService);

  dataPatinetas: any[] = [];
  patinetasServics = inject(BicicletasService)



  //RENDER
  renderEstacionesT() {
    this.estacionesServics.getEstaciones().subscribe({
      next: (dataApi: any) => {
        this.dataEstacions = dataApi
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
    this.renderEstacionesT()
  }
selectedEstacionId!: string ;

filtrarPatinetas(estacionID: string) {
  this.selectedEstacionId = estacionID;
    this.patinetasServics.getBicisPorEstacion(estacionID).subscribe({
      next: (dataApi: any) => {
        this.dataPatinetas = dataApi;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
