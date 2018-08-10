import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartialsModule, partialsComponents } from './partials/partials.module';
import { HomeComponent } from './pages/home/home.component';
import { appRouting } from './app-routing';
import { PersonComponent } from './pages/person/person.component';
import { ApiService } from "@services/api.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PersonComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        PartialsModule,
        ReactiveFormsModule,
        appRouting,
        HttpClientModule,
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
