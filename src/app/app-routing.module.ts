import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'playground', component: PlaygroundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
