import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { Page404Component } from './Main/page404/page404.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'demo', 
  //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  // },
  // {
  //   path: 'exo', 
  //   loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule)
  // },
  

  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
