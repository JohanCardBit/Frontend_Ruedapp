import { Component, inject } from '@angular/core';
import { MisUsuariosTemplate } from "../../../templates/admin/usuarios/mis-usuarios/mis-usuarios";
import { UserService } from '../../../services/auth/user/user.service';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-misusuarios',
  imports: [MisUsuariosTemplate],
  templateUrl: './misusuarios.html',
  styleUrl: './misusuarios.css'
})
export class Misusuarios {
  dataUsers!: any[];
  userSerivces = inject(UserService)
  idUsers!: ''


  renderUsers() {
    this.userSerivces.getUsers().subscribe({
      next: (dataApi: any) => {
        this.dataUsers = dataApi
        flashy(`${dataApi.length} Usuarios encontrados!`, {
          type: 'success',
          position: 'bottom-right',
          duration: 4000,
          closable: true,
          animation: 'bounce',
          theme: 'dark',
          icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',

        });
      },

      error: (error: any) => {
        console.log(error);

        flashy(`${error.error?.msj || 'Error al cargar categorías'}`, {
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
    this.renderUsers()

  }
}
