import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Counter } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { UsuarioModule } from "./usuario/usuario.module";
import { provideHttpClient } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,Counter, HeroComponent, ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UsuarioModule

],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
