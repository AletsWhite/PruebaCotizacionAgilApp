import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCotizacionPageRoutingModule } from './nueva-cotizacion-routing.module';

import { NuevaCotizacionPage } from './nueva-cotizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaCotizacionPageRoutingModule
  ],
  declarations: [NuevaCotizacionPage]
})
export class NuevaCotizacionPageModule {}
