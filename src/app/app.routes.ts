import { Routes } from '@angular/router';
import { Login } from './components/public/login/login';
import { Register } from './components/public/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { Panel } from './components/panel/panel';
import { Inicio } from './components/panel/inicio/inicio';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, title: 'RuedApp | Iniciar Sesion' },
    { path: 'register', component: Register, title: 'RuedApp | Registrarse' },
    { path: 'dashboard/admin', component: Dashboard, title: 'RuedApp | Admin' },
    { path: 'panel', component: Panel, children:[
        {path: 'inicio', component: Inicio, title: 'Ruedapp | Panel de usuario' },
        
    ]}
];
