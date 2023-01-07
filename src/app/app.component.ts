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
  fecha = new Date();
  hoy = new Date();
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
  transform(value: string, ...args:any[]): any {
    if(value){
      const date=new Date(value);
      const now = new Date();
      const seconds = Math.round(Math.abs((now.getTime() - date.getTime()) / 1000));;
      const min = Math.round(seconds / 60);
      const hours = Math.round(min / 60);
      const days = Math.round(hours / 24);
      
      if (seconds <= 59) {
        return `Hace ${seconds} segundos`;
      } else if (min <= 59) {
        return `Hace ${min} minutos`;
      } else if (hours <= 23) {
        return `Hace ${hours} horas`;
      } else if (days <= 9) {
        return `Hace ${days} días`;
       
      } else {
        
          return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
           
          });
      }
}}}
