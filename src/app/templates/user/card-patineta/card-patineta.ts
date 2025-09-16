import { Component, Input } from '@angular/core';

import { DataBicicletas } from '../../../models/bicicletas/data-bicicletas';
import { AlquilerService } from '../../../services/alquiler/alquiler.service';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-card-patineta',
  imports: [],
  templateUrl: './card-patineta.html',
  styleUrl: './card-patineta.css'
})
export class CardPatineta {
  @Input() data!: DataBicicletas

  constructor(private alquilerService: AlquilerService) { }

  rentarPatineta() {
  const confirmar = window.confirm(
    `¿Estas seguro de alquilar la patineta con serial "${this.data.serial}" en la estacion "${this.data.estacion.nombre}"?`
  );

  if (!confirmar) {
    flashy('Alquiler cancelado', {
      type: 'error',
      position: 'bottom-right',
      duration: 3000,
      closable: true,
      animation: 'bounce',
      theme: 'dark',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
              style="width:24px;height:24px;color:#ef4444;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            </svg>`
    });
    return;
  }

  this.alquilerService.postAlquilar(this.data.estacion._id, this.data.serial).subscribe({
    next: (dataApi: any) => {
      flashy(`${dataApi.msj || 'Patineta alquilada correctamente'}`, {
        type: 'success',
        position: 'bottom-right',
        duration: 4000,
        closable: true,
        animation: 'bounce',
        theme: 'dark',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                style="width:24px;height:24px;color:#22c55e;">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"/>
              </svg>`
      });
      console.log('Alquiler:', dataApi);
    },
    error: (error) => {
      flashy(`${error.error?.msj || ' Error al alquilar'}`, {
        type: 'error',
        position: 'bottom-right',
        duration: 4000,
        closable: true,
        animation: 'bounce',
        theme: 'dark',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                style="width:24px;height:24px;color:#ef4444;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
              </svg>`
      });
      console.error(error);
    }
  });
}





}

