import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login';
import { DashboardComponent } from '../pages/dashboard/dashboard';
import { ProjectList } from '../pages/project-list/project-list';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'projects', component: ProjectList },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
