import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AboutTheCourseComponent } from './about-the-course/about-the-course.component';

const routes: Routes = [
  {path: 'syllabus', component: SyllabusComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'about', component: AboutTheCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
