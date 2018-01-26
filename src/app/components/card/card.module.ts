import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardComponent } from './card.component'
import { FotoComponent } from './foto/foto.component'

import { CapitalizeFiltro } from './../../filters/CapitalizeFiltro.pipe';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [
    CardComponent,
    FotoComponent,
    CapitalizeFiltro,
  ],
  exports: [
    CardComponent,
    CapitalizeFiltro,
  ]
})
export class CardModule { }