import { Component, inject } from '@angular/core';

import { CommonModule, DatePipe } from '@angular/common';
import { AlquilerService } from '../../../services/alquiler/alquiler.service';

@Component({
  selector: 'app-card-historial-alquileres',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './card-historial-alquileres.html',
  styleUrl: './card-historial-alquileres.css'
})
export class CardHistorialAlquileres {
  alquileres: any[] = [];
  alquilerService = inject(AlquilerService);

  ngOnInit() {
    this.alquilerService.getHistorialAlquileresUser().subscribe({
      next: (res: any) => {
        this.alquileres = res.historial;
        console.log('Historial:', this.alquileres);
      },
      error: (err) => console.error(err)
    });
  }
}
