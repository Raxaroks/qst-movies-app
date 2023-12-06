import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WatchlistBtnComponent } from './watchlist-btn/watchlist-btn.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    ThumbnailComponent,
    SidebarComponent,
    WatchlistBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    ThumbnailComponent,
    SidebarComponent,
    WatchlistBtnComponent
  ]
})
export class ComponentsModule { }
