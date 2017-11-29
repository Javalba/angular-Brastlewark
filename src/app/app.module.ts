import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GnomeWrapperComponent } from './components/gnomes/gnome-wrapper/gnome-wrapper.component';
import { GnomeListComponent } from './components/gnomes/gnome-list/gnome-list.component';
import { GnomeItemComponent } from './components/gnomes/gnome-item/gnome-item.component';
import { GnomeDetailsComponent } from './components/gnomes/gnome-details/gnome-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomeWrapperComponent,
    GnomeListComponent,
    GnomeItemComponent,
    GnomeDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
