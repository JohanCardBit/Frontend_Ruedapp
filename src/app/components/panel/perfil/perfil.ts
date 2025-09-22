import { Component } from '@angular/core';
import { CardPerfilU } from '../../../templates/user/card-perfil-u/card-perfil-u';
import { CardAlquilerActivo } from "../../../templates/user/card-alquiler-activo/card-alquiler-activo";
import { CardHistorialAlquileres } from "../../../templates/user/card-historial-alquileres/card-historial-alquileres";

@Component({
  selector: 'app-perfil',
  imports: [CardPerfilU, CardAlquilerActivo, CardHistorialAlquileres],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

}
