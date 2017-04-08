import { ApplyJobComponent } from './apply-job/apply-job.component';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalService, SearchResultsService, ApplyJobService } from '../_services/index';
import { ProfessionalRoutingModule } from './professional.routing';
import { SharedModule } from '../shared/shared.module';
import { ProfessionalDashboardComponent  } from './professional-dashboard/professional-dashboard.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ProfessionalRoutingModule,
        SharedModule,
        MdlModule,
        CommonModule,
        ],
    exports: [],
    declarations: [ProfessionalDashboardComponent, JobSearchComponent, SearchResultsComponent, ApplyJobComponent],
    entryComponents: [ApplyJobComponent],
    providers: [ SearchResultsService, ProfessionalService, ApplyJobService],
})
export class ProfessionalModule { }
