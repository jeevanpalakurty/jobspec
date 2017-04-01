import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, RolesGuard } from '../_guards/index';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployerPostJobComponent } from './employer-post-job/employer-post-job.component';

const employerRoutes: Routes = [
    {path: 'employer', component: EmployerDashboardComponent},
    {path: 'postjob', component: EmployerPostJobComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(employerRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class EmployerRoutingModule { }