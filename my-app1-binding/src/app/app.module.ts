import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaStudentiComponent } from './lista-studenti/lista-studenti.component';
import { ListaDocentiComponent } from './lista-docenti/lista-docenti.component';
import { DocenteComponent } from './listaDocenti/docente/docente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaStudentiComponent,
    ListaDocentiComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
