import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { ModulesDetailsComponent } from './modules-details/modules-details.component';
import { AboutTheCourseComponent } from './about-the-course/about-the-course.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModulesListComponent,
    ModulesDetailsComponent,
    AboutTheCourseComponent,
    SyllabusComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
