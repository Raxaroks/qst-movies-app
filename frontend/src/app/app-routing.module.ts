import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';


export const appRoutes: Routes = [
  {
    path: '', 
    redirectTo: 'spa',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'spa'
  }  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
