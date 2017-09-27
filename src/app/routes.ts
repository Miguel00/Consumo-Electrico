import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HistoricoComponent } from './auth/historico/historico.component';
import { GestionComponent } from './auth/gestion/gestion.component';
import { InformeEnergiaComponent } from './common/informe-energia/informe-energia.component';
import { ResumenComponent } from './common/resumen/resumen.component';

export const routes: Routes =[
    {
        path: '', pathMatch: 'full', redirectTo : '/home'
    },
    {
        path: 'login', component: LoginComponent, pathMatch: 'full', 
    },
    {
        path: 'home', component: HomeComponent, 
    },
    {
        path: 'proyects', component: ProjectListComponent, 
    },
    {
        path: 'historico', component: HistoricoComponent, 
    },
    {
        path: 'gestion', component: GestionComponent, 
    },
    {
        path: 'informe-energia', component: InformeEnergiaComponent, 
    },
    {
        path: 'resumen', component: ResumenComponent, 
    },
    {
        path: '**', component: NotFoundComponent
    },  
    
];