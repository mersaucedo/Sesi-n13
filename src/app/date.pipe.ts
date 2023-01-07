import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

    
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
    }
   
  }
}
