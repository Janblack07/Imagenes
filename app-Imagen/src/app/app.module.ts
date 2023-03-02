import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenComponent } from './Imagenes/imagen/imagen.component';
import { CrearimagenComponent } from './Imagenes/crearimagen/crearimagen.component';
import { VerimagenComponent } from './Imagenes/verimagen/verimagen.component';
import { EditarimagenComponent } from './Imagenes/editarimagen/editarimagen.component';
import { NavComponent } from './Shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    CrearimagenComponent,
    VerimagenComponent,
    EditarimagenComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
