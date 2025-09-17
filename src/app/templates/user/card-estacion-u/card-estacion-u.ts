import { Component, Input } from '@angular/core';
import { Estaciones } from '../../../models/estacion/estaciones';
import { AlquilerService } from '../../../services/alquiler/alquiler.service';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-card-estacion-u',
  imports: [],
  templateUrl: './card-estacion-u.html',
  styleUrl: './card-estacion-u.css',
})
export class CardEstacionU {
  @Input() data!: Estaciones;

  constructor(private alquierService: AlquilerService) { }

  estacionar() {
    this.alquierService.getAlquilerActivoUser().subscribe({
      next: (activo: any) => {
        console.log(activo);

        if (activo?.alquiler) {
          if (
            confirm(`Quieres devolver la patineta en la ${this.data.nombre}?`)
          ) {
            this.alquierService.postDevolver(this.data._id!).subscribe({
              next: (dataApi: any) => {
                console.log(dataApi);

                flashy(`${dataApi.msj || 'Patineta devuelta con exito'}`, {
                  type: 'success',
                  position: 'bottom-right',
                  duration: 4000,
                  closable: true,
                  animation: 'bounce',
                  theme: 'dark',
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" /> </svg>',
                });
              },
              error: (error) => {
                console.log(error);

                flashy(
                  `${error.error?.msj || 'Error al devolver la patineta'}`,
                  {
                    type: 'error',
                    position: 'bottom-right',
                    duration: 4000,
                    closable: true,
                    animation: 'bounce',
                    theme: 'dark',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:24px;height:24px;color:#ef4444;">   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/> </svg>',
                  }
                );
              },
            });
          }
        } else {
          flashy(`No tienes ninguna patineta activa para devolver`, {
            type: 'warning',
            position: 'bottom-right',
            duration: 4000,
            closable: true,
            animation: 'bounce',
            theme: 'dark',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:24px;height:24px;color:#facc15;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4h4" /> </svg>',
          });
        }
      },
      error: (error) => {
        console.log(error);

        flashy(`${error.error?.msj || 'Error al verificar alquiler'}`, {
          type: 'error',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:24px;height:24px;color:#ef4444;">   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/> </svg>',
        });
      },
    });
  }
}
