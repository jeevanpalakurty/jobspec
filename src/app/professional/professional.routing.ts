import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSearchComponent } from './job-search/job-search.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const professionalRoutes: Routes = [
   {path: 'professional', component: ProfessionalDashboardComponent},
   { path: 'jobsearch', component: JobSearchComponent,
      children: [
              {
                path: 'searchresults',
                component: SearchResultsComponent,
              }
            ]
   }
];

export const ProfessionalRouting = RouterModule.forChild(professionalRoutes);

@NgModule({
  imports: [
    RouterModule.forChild(professionalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfessionalRoutingModule { }

