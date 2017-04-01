import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalService } from '../_services/index';
import { ProfessionalRouting } from './professional.routing';
import { SharedModule } from '../shared/shared.module';
import { JobSearchComponent } from './job-search/job-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SharedModule,
        ProfessionalRouting],
    exports: [],
    declarations: [JobSearchComponent],
    providers: [ProfessionalService],
})
export class ProfessionalModule { }
