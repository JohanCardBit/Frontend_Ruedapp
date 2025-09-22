import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


import flashy from '@pablotheblink/flashyjs';
import { UserService } from '../../../services/auth/user/user.service';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-card-config-u',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-config-u.html',
  styleUrls: ['./card-config-u.css']
})
export class CardConfigU {
  userService = inject(UserService);
  formPerfil!: FormGroup;
  idUsuario!: string;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formPerfil = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      apellido: [''],
      password: [''],
      foto: ['']
    });
  }



  cargarPerfil() {
    this.userService.getMe().subscribe({
      next: (dataApi: any) => {
        console.log("log de udasasd", dataApi);
        console.log(dataApi.nombre);


        this.formPerfil.patchValue({
          nombre: dataApi.dataID.nombre,
          correo: dataApi.dataID.correo,
          apellido: dataApi.dataID.apellido,
          password: dataApi.dataID.password,
          foto: dataApi.dataID.foto
        });
        this.idUsuario = dataApi._id;
      },
      error: (error: any) => {
        flashy(`Error al cargar perfil`, {
          type: 'error',
          position: 'bottom-right',
          duration: 3000,
          theme: 'dark'
        });
      }
    });
  }

  updatePerfil() {
    if (this.formPerfil.invalid) {
      return
    };

    this.userService.updateUser(this.idUsuario, this.formPerfil.value).subscribe({
      next: (dataApi: any) => {
        flashy(`${dataApi.msj}`, {
          type: 'success',
          position: 'bottom-right',
          duration: 2000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',
        });
        this.cargarPerfil();
      },
      error: (error: any) => {
        flashy(`${error.error?.msj || 'Error al actualizar'}`, {
          type: 'error',
          position: 'bottom-right',
          duration: 3000,
          theme: 'dark'
        });
      }
    });
  }

  ngOnInit() {
    this.cargarPerfil();
  }
}