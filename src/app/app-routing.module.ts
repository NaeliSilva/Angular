import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'
import { AboutComponent } from 'src/app/about/about.component'

const routes: Routes = [
{path: 'about', component:AboutComponent},
{path: 'home', component:HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
