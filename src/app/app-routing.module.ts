import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharcterbuildComponent } from './charcterbuild/charcterbuild.component';
import { HomepageComponent } from './homepage/homepage.component';
import {IntroComponent} from  './intro/intro.component';
import { BusStopComponent } from './bus-stop/bus-stop.component';

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "character", component: CharcterbuildComponent },
  { path: "intro", component: IntroComponent},
  { path: "bus", component: BusStopComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
