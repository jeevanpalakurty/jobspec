import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployerPostJobComponent } from './employer-post-job/employer-post-job.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EmployerDashboardComponent,
        EmployerPostJobComponent
    ],
    providers: [
    ],
    bootstrap: []
})

export class EmployerModule { }

