import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobSearchComponent } from './job-search/job-search.component';

const routes: Routes = [
  { path: 'path', component: NameComponent },
];

@NgModule({
  imports: [RouterModule.forChild|Root(routes)],
  exports: [RouterModule],
})
export class NameRoutingModule { }

export const routedComponents = [NameComponent];