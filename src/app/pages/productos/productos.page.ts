import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  textoBuscar: string = '';

  public listaProductos = [
    {
      id: '1',
      nombre: 'Ventana California',
      URLimagen: 'https://images.thdstatic.com/productImages/4c83e566-ba08-47bb-82c1-2b160437544f/svn/tangerine-mmi-door-steel-doors-without-glass-z024086r-64_600.jpg'
    },
    {
      id: '2',
      nombre: 'Puerta Cochera Ropper',
      URLimagem: 'https://image.made-in-china.com/2f0j00QOdtwqGJbprT/Top-Arch-Grill-Design-UPVC-Sliding-Window-with-Crescent-Lock.jpg'
    },
    {
      id: '3',
      nombre: 'Puerta Prefabricada',
      URLimagem: 'https://images.thdstatic.com/productImages/4c83e566-ba08-47bb-82c1-2b160437544f/svn/tangerine-mmi-door-steel-doors-without-glass-z024086r-64_600.jpg'
    }    
  ]

  constructor() { }

  ngOnInit() {
  }
  onSearchChange( event )
  {
    this.textoBuscar = event.detail.value;
  }
}
