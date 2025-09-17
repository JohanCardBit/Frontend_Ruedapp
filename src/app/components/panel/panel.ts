import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-panel',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel {
  constructor(private router: Router) { };

  cerrarSesion() {
    const confimarcion = confirm("Estas seguro de cerrar sesion?");
    if (!confimarcion) {
      return;
    }

    sessionStorage.clear()

    this.router.navigate(["/login"]);



  }
}
