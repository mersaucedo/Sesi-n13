import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities = ["Barcelona", "Madrid", "Lima"] ;
  texto !: string; 
  num2 !: number; 
  title = 'nueve';
  //fecha = new Date();
  fecha = new Date("05/01/2023");
  hoy = new Date("06/01/2023");
  dieciseisDias = 1000 * 60 * 60 * 24 * 2;
  //fechaM =new Date(this.hoy.getTime()+1000*60*60*24);
  diferencia = this.hoy.getTime() -  this.fecha.getTime();
  //Math.abs(this.hoy-this.fecha)
  //horasTranscurridas = this.diferencia / 1000 / 60 / 60;
  
  //resta = this.fecha.getTime() - this.date.getTime();

   
  //datos;
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado = 0;
  verSeleccion: string = '';
   estado = [0,1,2,3,4];

  constructor(){
     // this.datos = ["suma","resta","multiplicacion", "division"];
  }  

  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
    

}}
