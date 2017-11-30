import { PagerService } from './services/pager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';

//components
import { GnomeWrapperComponent } from './components/gnomes/gnome-wrapper/gnome-wrapper.component';
import { GnomeListComponent } from './components/gnomes/gnome-list/gnome-list.component';
import { GnomeItemComponent } from './components/gnomes/gnome-item/gnome-item.component';
import { GnomeDetailsComponent } from './components/gnomes/gnome-details/gnome-details.component';
import { HomeComponent } from './components/home/home.component';

//services
import { GnomeService } from './services/gnome.service';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GnomeWrapperComponent,
    GnomeListComponent,
    GnomeItemComponent,
    GnomeDetailsComponent,
    HomeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [GnomeService,PagerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
