import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  //here can set home page.
  {
    path: '',
    redirectTo: '/calendrier',
    pathMatch: 'full',
  }, {
    path: 'calendrier',
    loadChildren: './calendrier/calendrier.module#CalendrierModule',
    data: {title: 'calendrier'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
