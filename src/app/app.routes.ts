import { Routes } from '@angular/router';
import { Login } from './components/public/login/login';
import { Register } from './components/public/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { Panel } from './components/panel/panel';
import { Inicio } from './components/panel/inicio/inicio';
import { Estaciones } from './components/dashboard/estaciones/estaciones';
import { Misusuarios } from './components/dashboard/misusuarios/misusuarios';
import { Bicicletas } from './components/dashboard/bicicletas/bicicletas';
import { Crear } from './components/dashboard/crear/crear';
import { Estacionar } from './components/panel/estacionar/estacionar';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, title: 'RuedApp | Iniciar Sesion' },
    { path: 'register', component: Register, title: 'RuedApp | Registrarse' },

    {
        path: 'dashboard/admin', component: Dashboard, title: 'Ruedapp | Admin', children: [
            { path: 'estaciones', component: Estaciones, title: 'Ruedapp | Admin estaciones ' },
            { path: 'usuarios', component: Misusuarios, title: 'Ruedapp | Admin usuarios' },
            { path: 'patinetas', component: Bicicletas, title: 'Ruedapp | Admin patinetas' },
            { path: 'crear', component: Crear, title: 'Ruedapp | Admin crear' }
        ]
    },


    {
        path: 'panel', component: Panel, children: [
            { path: 'alquilar', component: Inicio, title: 'Ruedapp | Panel de alquiler' },
            { path: 'estacionar', component: Estacionar, title: 'Ruedapp | Panel de estacionamineto'}

        ]
    }
];
