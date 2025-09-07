import { Component, inject } from '@angular/core';
import { LoginService } from '../../../services/auth/login/login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import flashy from '@pablotheblink/flashyjs';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userServices = inject(LoginService);
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formLogin = fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  iniciarSesion() {
    if (this.formLogin.valid) {
      this.userServices.postLogin(this.formLogin.value).subscribe({
        next: (dataApi: any) => {
          console.log('log de iniciar', dataApi);
          sessionStorage.setItem('token', dataApi.token);
          flashy(`Bienvenido nuevamente ${dataApi.Welcome}!`, {
            type: 'success',
            position: 'bottom-right',
            duration: 4000,
            closable: true,
            animation: 'bounce',
            theme: 'dark',
            icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="2"       stroke="currentColor"       style="width:24px;height:24px;color:#22c55e;">   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>   <path stroke-linecap="round" stroke-linejoin="round"          d="M9 12l2 2 4-4" /> </svg>',
            onClick: () => {
              console.log('Notificación clickeada');
            },
            onClose: () => {
              this.router.navigate(['/dashboard']);
            },
          });
        },
        error(error: any) {
          console.log(error);
          
          flashy(`${error.error.msj}`, {
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
    } else {
      flashy('Formulario invalido, intenta nuevamente.', {
        type: 'warning',
        position: 'bottom-right',
        duration: 4000,
        closable: true,
        animation: 'bounce',
        theme: 'dark',
        icon: '<svg xmlns="http://www.w3.org/2000/svg"       fill="none"       viewBox="0 0 24 24"       stroke-width="1.8"       stroke="currentColor"       style="width:24px;height:24px;color:#f59e0b;">   <path stroke-linecap="round" stroke-linejoin="round"          d="M12 9v3.75m0 3.75h.007M10.29 3.86c.77-1.33 2.65-1.33             3.42 0l7.35 12.68c.75 1.3-.19 2.96-1.71             2.96H4.65c-1.52 0-2.46-1.66-1.71-2.96L10.29 3.86z" /> </svg>',
      });
    }
  }
}
