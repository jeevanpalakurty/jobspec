import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalService } from '../_services/index';
import { ProfessionalRoutingModule } from './professional.routing';
import { SharedModule } from '../shared/shared.module';
import { JobSearchComponent } from './job-search/job-search.component';
import { ProfessionalDashboardComponent  } from './professional-dashboard/professional-dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ProfessionalRoutingModule,
        SharedModule
        ],
    exports: [],
    declarations: [ProfessionalDashboardComponent, JobSearchComponent],
    providers: [ProfessionalService],
})
export class ProfessionalModule { }
