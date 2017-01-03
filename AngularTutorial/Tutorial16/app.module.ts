import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes  } from '@angular/router';

import { AppComponent, AppComponentA, AppComponentB }  from './app.component';


export const AppRoutes: Routes = [
    { path: '', component: AppComponentA },
    { path: 'contact/:id', component: AppComponentB }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent, AppComponentA, AppComponentB
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }