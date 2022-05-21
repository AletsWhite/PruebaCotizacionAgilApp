import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from '../servicio-productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {

  public listaProductos = [
    {
      id: '1',
      nombre: 'Ventana California',
      URLimagen: 'https://images.thdstatic.com/productImages/4c83e566-ba08-47bb-82c1-2b160437544f/svn/tangerine-mmi-door-steel-doors-without-glass-z024086r-64_600.jpg'
    }
  ];

  atributos = [];

  constructor(private servicioProductosService: ServicioProductosService) { }


  ngOnInit() {
    this.atributos = this.servicioProductosService.getAtributos();
  }

  agregarAtributo()
  {
    this.servicioProductosService.agregarAtributo();
  }
  borrarAtributo( id: string )
  {
    this.servicioProductosService.borrarAtibuto(id);
    this.atributos = this.servicioProductosService.getAtributos();
    //console.log( this.atributos );
  }

}
