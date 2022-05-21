import { Pipe, PipeTransform } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],texto: string = ''): any[] {
    
    if( texto === '' ){
        return arreglo;
    }
    if( !arreglo ){
      return arreglo;
    }


    texto = texto.toLocaleLowerCase();
    

     return arreglo.filter( 
      item => item.nombre.toLowerCase().includes(texto) || item.id.includes(texto)
    );
      
  }

}
