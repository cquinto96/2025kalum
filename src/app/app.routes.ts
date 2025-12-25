import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Login } from './auth/login/login';

export const routes: Routes = [
    {
        path: '',
        component:Layout
    },
    {
        path: 'login', component: Login
    },
    {
        path: '**',redirectTo: ''
    }
];
