import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AppComponent2 }  from './app.component2';
import {AppService} from './app.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent, AppComponent2
    ],
    bootstrap: [AppComponent, AppComponent2],
    providers: [AppService]
})
export class AppModule { }