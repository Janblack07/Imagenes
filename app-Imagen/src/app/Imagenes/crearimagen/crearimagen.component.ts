import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-crearimagen',
  templateUrl: './crearimagen.component.html',
  styleUrls: ['./crearimagen.component.css']
})
export class CrearimagenComponent {
  file!:any;
  imagenForm= new FormGroup({
    nombreI: new FormControl(''),
    url_imagen: new FormControl(''),
    imagen_id: new FormControl(''),
    imagen_google : new FormControl(''),
    cantidad : new FormControl(''),

  })

  constructor(private imagen:ServicioService,private route:Router){
  }
  onFileSelected(event:any) {
    this.file = event.target.files[0];

 }

 OncrearImagen(Form:any){

     console.log(Form);
     const body:any=new FormData();
     body.append('nombreI',this.imagenForm.get('nombreI')?.value);
     body.append('imagenP',this.file);
     body.append('imagen_google',this.imagenForm.get('imagen_google')?.value);
     body.append('cantidad',this.imagenForm.get('cantidad')?.value);
     this.imagen.CreateImagen(body).subscribe((data:any)=>{
       console.log(data);
       alert('Se creo la Imagen.');
       this.route.navigate(['/imagen/ver']);
     },(e)=>{console.log(e);});
   }
}
