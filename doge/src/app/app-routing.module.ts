import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {RandomdogComponent} from './randomdog/randomdog.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'randomDog', component: RandomdogComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
