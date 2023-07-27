import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { Page404Component } from './pages/page404/page404.component';
import { CardComponent } from './components/card/card.component';
import { UpperCasePipe } from './upper-case.pipe';
import { TextDecoDirective } from './text-deco.directive';
import { ShowDetailsDirective } from './show-details.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    Page404Component,
    CardComponent,
    UpperCasePipe,
    TextDecoDirective,
    ShowDetailsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
