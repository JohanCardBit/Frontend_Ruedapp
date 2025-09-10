import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BicicletasService } from '../../../services/bicicletas/bicicletas.service';
import { EstacionesService } from '../../../services/estaciones/estaciones.service';
import { Router } from '@angular/router';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-crear',
  imports: [ReactiveFormsModule],
  templateUrl: './crear.html',
  styleUrl: './crear.css'
})
export class Crear {

  biciServices = inject(BicicletasService);
  formBicis!: any

  estacionServices = inject(EstacionesService);
  formEstaciones!: any

  constructor(private fb: FormBuilder, private router: Router) {
    this.formBicis = fb.group({
      serial: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      estacion: ['', [Validators.required]],
    });

    this.formEstaciones = fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
    });
  };


  crearBici() {
    if (this.formBicis.valid) {
      this.biciServices.postBici(this.formBicis.value).subscribe({
        next: (dataApi: any) => {
          flashy("Patineta creada correctamente", {
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
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" /></svg>`,
            onClose: () => {
              // this.router.navigate(['/login']);
            }
          });
        },

        error: (error: any) => {
          flashy("Error, Intentalo nuevamente", {
            type: 'error',
            position: 'bottom-right',
            duration: 4000,
            closable: true,
            animation: 'bounce',
            theme: 'dark',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                      style="width:24px;height:24px;color:#ef4444;">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/></svg>`
          });
        }
      });
    } else {
      flashy('Error al crear patineta. Verifica los campos.', {
        type: 'warning',
        position: 'bottom-right',
        duration: 4000,
        closable: true,
        animation: 'bounce',
        theme: 'dark',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"
                  style="width:24px;height:24px;color:#f59e0b;">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m0 3.75h.007M10.29 3.86c.77-1.33
                        2.65-1.33 3.42 0l7.35 12.68c.75 1.3-.19
                        2.96-1.71 2.96H4.65c-1.52 0-2.46-1.66-1.71-2.96L10.29 3.86z" /></svg>`
      });
    }
  };


  crearEstacion() {
    if (this.formEstaciones.valid) {
      this.estacionServices.postEstacion(this.formEstaciones.value).subscribe({
        next: (dataApi: any) => {
          flashy("Estacion creada correctamente", {
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
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" /></svg>`,
            onClose: () => {
              // this.router.navigate(['/login']);
            }
          });
        },

        error: (error: any) => {
          console.log(error);
          
          flashy("Error, Intentalo nuevamente", {
            type: 'error',
            position: 'bottom-right',
            duration: 4000,
            closable: true,
            animation: 'bounce',
            theme: 'dark',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                      style="width:24px;height:24px;color:#ef4444;">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/></svg>`
          });
        }
      });
    } else {
      flashy('Error al crear estacion. Verifica los campos.', {
        type: 'warning',
        position: 'bottom-right',
        duration: 4000,
        closable: true,
        animation: 'bounce',
        theme: 'dark',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"
                  style="width:24px;height:24px;color:#f59e0b;">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m0 3.75h.007M10.29 3.86c.77-1.33
                        2.65-1.33 3.42 0l7.35 12.68c.75 1.3-.19
                        2.96-1.71 2.96H4.65c-1.52 0-2.46-1.66-1.71-2.96L10.29 3.86z" /></svg>`
      });
    }
  };



}