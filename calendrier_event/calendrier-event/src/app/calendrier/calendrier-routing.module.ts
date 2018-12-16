import {RouterModule, Routes} from "@angular/router";
import {CalendrierEventComponent} from "./calendrier-event/calendrier-event.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CalendrierEventComponent,
        data: {
          title: 'admin-home'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CalendrierRoutingModule {
}
