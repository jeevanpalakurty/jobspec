import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSearchComponent } from './job-search/job-search.component';

const professionalRoutes: Routes = [
  { path: 'jobsearch', component: JobSearchComponent },
];

export const ProfessionalRouting = RouterModule.forChild(professionalRoutes);
