import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editarimagen',
  templateUrl: './editarimagen.component.html',
  styleUrls: ['./editarimagen.component.css']
})
export class EditarimagenComponent {
  id:any;
  data:any;
  file!: File;
  image:any
  constructor(private ima:ServicioService, private router:Router, private route: ActivatedRoute) {
}
imagenForm= new FormGroup({
  nombreI: new FormControl(''),
  url_imagen: new FormControl(''),
  imagen_google : new FormControl(''),
  cantidad : new FormControl(''),
  imagenP : new FormControl('')

})
ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

        this.ima.OneImagen(this.id).subscribe((data:any)=>{
        this.data=data.Imagenes;
        this.image = data.Imagenes.url_imagen;
        console.log(this.data);
        this.imagenForm.setValue({
          "nombreI": this.data.nombreI,
          "url_imagen": this.data.url_imagen,
          "imagen_google": this.data.imagen_google,
          "cantidad": this.data.cantidad,
          "imagenP":''
        })
      });
}
onFileSelected(event:any) {
  this.file = event.target.files[0];

}
onUpdate(data:any){
  const body:any=new FormData();
  body.append('nombreI',this.imagenForm.get('nombreI')?.value);
  body.append('imagenP',this.file);
  body.append('imagen_google',this.imagenForm.get('imagen_google')?.value);
  body.append('cantidad',this.imagenForm.get('cantidad')?.value);
  console.log(body);
  console.log(this.id);
  this.ima.UpdateImagen(this.id,data).subscribe((data:any) =>{
   alert('Se actualizo conrrectamente el equipo.');
   this.router.navigate(['/imagen/ver']);
 });
}

}
