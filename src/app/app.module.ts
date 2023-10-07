import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { PopupComponent } from './components/popup/popup.component';
import { InfoComponent } from './pages/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectsComponent,
    ContainerComponent,
    HomeComponent,
    PopupComponent,
    InfoComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
