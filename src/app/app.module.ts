import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharcterbuildComponent } from './charcterbuild/charcterbuild.component';
import { IntroComponent } from './intro/intro.component';
import { BusStopComponent } from './bus-stop/bus-stop.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CharcterbuildComponent,
    IntroComponent,
    BusStopComponent
  ],
imports: [BrowserModule,  BrowserAnimationsModule, AppRoutingModule, FormsModule],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }