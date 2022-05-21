import { Injectable } from '@angular/core';
import { Atributo } from './nuevo-producto/atributo.mode';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  public atributos: Atributo[] = [
    {
      id: '1',
      nombre: "",
      cantidad: ""
    }
  ]
    

  
  constructor() { }

  getAtributos()
  {
    return this.atributos
  }
  

  agregarAtributo(){
    this.atributos.push({
        id: this.atributos.length + 1 + "",
        nombre: " ",
        cantidad: " "
      })

  }
  borrarAtibuto( id: string )
  {
    this.atributos = this.atributos.filter( atributo => {
      return atributo.id  !== id
    } )

    // Re-asignar ID's despues de borrar
    for( let i=0; i<this.atributos.length; i++ ){
      this.atributos[i].id = i+1 + "";
    }
  }

}
