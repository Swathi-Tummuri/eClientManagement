import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'client-registration', component: ClientRegistrationComponent},
  {path: 'meeting-schedule', component: MeetingScheduleComponent},
  {path: '*', component: AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ClientRegistrationComponent,
    MeetingScheduleComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
