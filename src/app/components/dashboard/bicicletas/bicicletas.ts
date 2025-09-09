import { Component, inject } from '@angular/core';
import { Patineta } from '../../../templates/admin/bicicletas/patineta/patineta';
import { BicicletasService } from '../../../services/bicicletas/bicicletas.service';
import flashy from '@pablotheblink/flashyjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bicicletas',
  imports: [Patineta, ReactiveFormsModule ],
  templateUrl: './bicicletas.html',
  styleUrl: './bicicletas.css'
})
export class Bicicletas {
  dataBicis!: any[]
  bicisServices = inject(BicicletasService)
  idPatineta!: any
  formPatineta!: FormGroup


  constructor(private fb: FormBuilder) {
    this.formPatineta = fb.group({
      serial: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      estacion: ['', [Validators.required]]
    })
  }

  renderBicis() {
    this.bicisServices.getBicis().subscribe({
      next: (dataApi: any) => {
        console.log(dataApi);

        this.dataBicis = dataApi
      },

      error: (error: any) => {
        console.log(error);

        flashy(` Error al cargar patinetas`, {
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
  };


  editPatineta(id: any) {
    this.idPatineta = id;
    console.log(this.idPatineta);
    
    this.bicisServices.getOneBici(id).subscribe({
      next: (dataApi: any) => {
        this.formPatineta.patchValue({
          serial: dataApi.serial,
          estado: dataApi.estado,
          estacion: dataApi.estacion.nombre
        })
        this.idPatineta = id
      },
      error: (error: any) => {
        console.log('error al ver datos de patineta', error);
      },
    });
  };


  updatePatineta() {
    
    if (!this.idPatineta) {
      console.log('hola estoy entrado aqui');
      return
    }
    console.log(this.formPatineta);
    
    this.bicisServices.putBici(this.formPatineta.value, this.idPatineta).subscribe({
      
      next: (dataApi: any) => {
        console.log(dataApi);
        flashy(`Patineta "${dataApi.bici.serial}" actualizada correctamente!`, {
          type: 'success',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',
        });
        this.renderBicis();
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
      },
    });
  }




  ngOnInit() {
    this.renderBicis()
  }

}
