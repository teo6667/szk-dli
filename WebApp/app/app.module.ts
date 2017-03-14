import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration.component';

import { JsonRequestOptions } from './json-request-options';
import { routing } from './app.routing'

import { LoginService } from './login-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing, NgbModule.forRoot()],
    declarations: [AppComponent, RegistrationComponent],
    bootstrap: [AppComponent],
    providers: [JsonRequestOptions, LoginService],
    
})
export class AppModule { }
