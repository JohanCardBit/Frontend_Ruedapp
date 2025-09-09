import { Component, inject } from '@angular/core';
import { CardAdmin } from '../../../templates/estaciones/card-admin/card-admin';
import { EstacionesService } from '../../../services/estaciones/estaciones.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import flashy from '@pablotheblink/flashyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estaciones',
  imports: [CardAdmin, ReactiveFormsModule],
  templateUrl: './estaciones.html',
  styleUrl: './estaciones.css'
})
export class Estaciones {
  dataEstaciones!: any[];
  estacionesService = inject(EstacionesService)
  formEstaciones!: FormGroup
  idEstaciones!: ""
  idEstacionSeleccionada: string | null = null;


  constructor(private router: Router, private fb: FormBuilder) {
    this.formEstaciones = this.fb.group({
      nombre: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      latitud: [0, [Validators.required]],
      longitud: [0, [Validators.required]],
      capacidad: [0],
      foto: [""]

    })
  };


  // EDITAR ESTACION
  editEstacion(id: any) {
    this.estacionesService.getOneEstacion(id).subscribe({
      next: (dataApi: any) => {
        this.formEstaciones.patchValue({
          nombre: dataApi.nombre,
          direccion: dataApi.direccion,
          capacidad: dataApi.capacidad,
          foto: dataApi.foto,
        })
        this.idEstaciones = id
      }, error: (error: any) => {
        console.log('error al editar la categoria', error);
      }
    })
  };

  updateEstacion() {
    this.estacionesService.updateEstacion(this.formEstaciones.value, this.idEstaciones).subscribe({
      next: (dataApi: any) => {
        console.log(dataApi);
        flashy(`${dataApi.msj}`, {
          type: 'success',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',
        });
        this.renderEstaciones()
      },

      error: (error: any) => {
        console.log(error);
        flashy(`${error.error?.msj}`, {
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


  
  //ACTUALIZAR ESTADO
  putEstadoEstacion(id: any) {
    this.estacionesService.putEstado(id).subscribe({

      next: (dataApi: any) => {
        console.log(dataApi);
        
        flashy(`Estacion movida a inactivos`, {
          type: 'success',
          position: 'bottom-right',
          duration: 2000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',
        });
      },
      error: (error: any) => {
        console.log(error);
        
        flashy(`Error al actualizar estado, intenta nuevamente`, {
          type: 'error',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#ef4444;">   <path stroke-linecap="round" stroke-linejoin="round"          d="M6 18L18 6M6 6l12 12" />   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/> </svg>',
        });
      },
    });
  }

  abrirModalEstado(id: string) {
    this.idEstacionSeleccionada = id;
  }



  //RENDER
  renderEstaciones() {
    this.estacionesService.getEstaciones().subscribe({
      next: (dataApi: any) => {
        this.dataEstaciones = dataApi
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
