import { GnomeDetailsComponent } from './components/gnomes/gnome-details/gnome-details.component';
import { GnomeListComponent } from './components/gnomes/gnome-list/gnome-list.component';
import { GnomeWrapperComponent } from './components/gnomes/gnome-wrapper/gnome-wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent,
    children: [
      {path:'',component: GnomeWrapperComponent},
      {path:':idGnome', component: GnomeDetailsComponent,}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
