import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { PagesComponent } from './pages.component';
import { environment } from 'src/environments/environment';
import { DynamicPageTitleService } from '../services/dynamic-page-title.service';

export const pageRoutes: Routes = [
  {
    path: 'spa',
    component: PagesComponent,
    title: `${ environment.appName }`,
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(pageRoutes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: DynamicPageTitleService
    }
  ]
})
export class PagesRoutingModule {}
