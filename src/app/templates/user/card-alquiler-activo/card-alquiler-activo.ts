import { Component, inject } from '@angular/core';
import { AlquilerService } from '../../../services/alquiler/alquiler.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-card-alquiler-activo',
  imports: [DatePipe, RouterLink],
  templateUrl: './card-alquiler-activo.html',
  styleUrl: './card-alquiler-activo.css'
})
export class CardAlquilerActivo {
  alquilerActivo: any = null;
  tiempoUso: string = '';
  private alquilerService = inject(AlquilerService);
  private timer: any;



  cargarAlquiler() {
    this.alquilerService.getAlquilerActivoUser().subscribe({
      next: (dataApi: any) => {
        if (dataApi.alquiler) {
          this.alquilerActivo = dataApi.alquiler;
          this.actualizarTiempo(dataApi.alquiler.fechaInicio);
          this.timer = setInterval(() => this.actualizarTiempo(dataApi.alquiler.fechaInicio), 1000);
        } else {
          this.alquilerActivo = null;
        }

        console.log(dataApi);

      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  private actualizarTiempo(fechaInicio: string) {
    const inicio = new Date(fechaInicio).getTime();
    const ahora = new Date().getTime();
    const diff = ahora - inicio;

    const horas = Math.floor(diff / 3600000);
    const minutos = Math.floor((diff % 3600000) / 60000);
    const segundos = Math.floor((diff % 60000) / 1000);

    this.tiempoUso = `${horas}h ${minutos}m ${segundos}s`;
  }

  ngOnInit() {
    this.cargarAlquiler();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
