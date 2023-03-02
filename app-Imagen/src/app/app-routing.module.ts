import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearimagenComponent } from './Imagenes/crearimagen/crearimagen.component';
import { EditarimagenComponent } from './Imagenes/editarimagen/editarimagen.component';
import { ImagenComponent } from './Imagenes/imagen/imagen.component';
import { VerimagenComponent } from './Imagenes/verimagen/verimagen.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'imagen',component:ImagenComponent,children:[
   {path: 'crear', component:CrearimagenComponent},
   {path: 'ver', component:VerimagenComponent},
   {path: 'editar/:id', component:EditarimagenComponent}
 ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
