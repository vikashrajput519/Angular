import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { BasicProjectComponent } from './basicproject/basicproject.component';
import { Debugging } from './debugging/debugging.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { DatabindingHomeComponent } from './databinding/databinding-home/databinding-home.component';
import { ServerElementComponent } from './databinding/server-element/server-element.component';

const appRoutes : Routes  = [
  { path : '', component : HomeComponent },
  { path : 'basic', component : BasicComponent },
  { path : 'basicProject', component : BasicProjectComponent },
  { path : 'debug', component : Debugging },
  { path : 'databinding', component : DatabindingHomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    BasicProjectComponent,
    Debugging,
    CockpitComponent,
    DatabindingHomeComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
