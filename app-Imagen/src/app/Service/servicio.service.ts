import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  api = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }
CreateImagen(body:any){
  return this.http.post(`${this.api}/imagenes/`,body);
}
AllImagen(){
  return this.http.get(`${this.api}/imagenes/`);
}
OneImagen(id:any){
  return this.http.get(`${this.api}/imagenes/${id}`);
}
UpdateImagen(id:any,body:any){
  return this.http.put(`${this.api}/imagenes/${id}`,body);
}
DeleteImagen(id:any){
  return this.http.delete(`${this.api}/imagenes/${id}`);
}
}
