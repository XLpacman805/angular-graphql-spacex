import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchListComponent } from './launch-list/launch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailsComponent,
    LaunchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
