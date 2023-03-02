import { Component } from '@angular/core';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-verimagen',
  templateUrl: './verimagen.component.html',
  styleUrls: ['./verimagen.component.css']
})
export class VerimagenComponent {
  constructor(private imagen:ServicioService){}
  ima!:any;
  ngOnInit(): void {
    this.OnImagen()
  }
term!:any;
OnImagen(){
    this.imagen.AllImagen().subscribe((data:any)=>{
      console.log(data);
      this.ima = Object.values(data.Imagenes);

    },(e)=>{
      console.log(e);
    })
  }
  onDelete(id:any){

    this.imagen.DeleteImagen(id).subscribe((data:any)=>{
        alert('Se Elimino Correctamente.');
        this.OnImagen();
    },(e)=>{console.log(e);})
  }
}
