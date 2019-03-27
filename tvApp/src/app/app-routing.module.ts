import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

const routes: Routes = [
  { path: '', component: SearchboxComponent},
  { path: 'show/:search', component: ShowsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
