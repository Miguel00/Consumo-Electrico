import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found.component'

export const routes: Routes =[
    {
        path: '', pathMatch: 'full', redirectTo : '/login'
    },
    {
        path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [PublicGuard]
    },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'proyects', component: ProjectListComponent, canActivate: [AuthGuard]
    },
    {
        path: '**', component: NotFoundComponent
    }
];