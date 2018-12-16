import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendrierEventComponent } from './calendrier-event/calendrier-event.component';
import {CalendrierRoutingModule} from "./calendrier-routing.module";
import {CalendarModule} from "angular-calendar";
import {NgbDatepickerModule, NgbModalModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {DateTimePickerComponent} from "./calendrier-event/date-time-picker.component";

@NgModule({
  declarations: [
    CalendrierEventComponent,
    DateTimePickerComponent
  ],
  imports: [
    CommonModule,
    CalendrierRoutingModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    FormsModule
  ]
})
export class CalendrierModule { }
