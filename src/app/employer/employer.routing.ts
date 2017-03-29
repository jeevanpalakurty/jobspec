import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, RolesGuard } from '../_guards/index';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployerPostJobComponent } from './employer-post-job/employer-post-job.component';

const employerRoutes: Routes = [
    {path: 'employer', component: EmployerDashboardComponent},
    {path: 'postjob', component: EmployerPostJobComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const EmployerRouting = RouterModule.forRoot(employerRoutes);
