import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
constructor (private router: Router){};

  cerrarSesion() {
    const confimarcion = confirm("Estas seguro de cerrar sesion?");
    if (!confimarcion) {
      return;
    }

    sessionStorage.clear()

    this.router.navigate(["/login"]);



  }
}
