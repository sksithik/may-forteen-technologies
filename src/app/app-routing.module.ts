import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeResolver } from './pages/home/home-resolver.service';


const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { contentfulData: HomeResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
