import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MdlModule } from '@angular-mdl/core';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard, RolesGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, RoleService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfessionalModule } from './professional/professional.module';
import { EmployerModule } from './employer/employer.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdlModule,
        ProfessionalModule,
        EmployerModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        RolesGuard,
        AlertService,
        AuthenticationService,
        UserService,
        RoleService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
