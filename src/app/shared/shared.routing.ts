import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobSearchComponent } from './job-search/job-search.component';

const sharedRoutes: Routes = [
  { path: 'path', component: JobSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule],
})
export class NameRoutingModule { }

export const SharedRouting = [JobSearchComponent];
