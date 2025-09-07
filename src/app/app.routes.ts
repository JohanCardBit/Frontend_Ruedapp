import { Routes } from '@angular/router';
import { Login } from './components/public/login/login';
import { Register } from './components/public/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { Panel } from './components/panel/panel';
import { Inicio } from './components/panel/inicio/inicio';
import { Estaciones } from './components/dashboard/estaciones/estaciones';
import { Misusuarios } from './components/dashboard/misusuarios/misusuarios';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, title: 'RuedApp | Iniciar Sesion' },
    { path: 'register', component: Register, title: 'RuedApp | Registrarse' },

    {
        path: 'dashboard/admin', component: Dashboard, title: 'RuedApp | Admin', children: [
            { path: 'estaciones', component: Estaciones, title: 'RuedApp | Admin estaciones ' },
            { path: 'usuarios', component: Misusuarios, title: 'RuedApp | Admin usuarios' }
        ]
    },


    {
        path: 'panel', component: Panel, children: [
            { path: 'inicio', component: Inicio, title: 'Ruedapp | Panel de usuario' },

        ]
    }
];
