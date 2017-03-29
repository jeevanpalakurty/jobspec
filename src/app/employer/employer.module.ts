import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployerPostJobComponent } from './employer-post-job/employer-post-job.component';
import { EmployerService } from '../_services/index';
import { EmployerRouting } from './employer.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SharedModule,
        EmployerRouting
    ],
    declarations: [
        EmployerDashboardComponent,
        EmployerPostJobComponent
    ],
    providers: [
        EmployerService
    ],
    bootstrap: []
})

export class EmployerModule { }

