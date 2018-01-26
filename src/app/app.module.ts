import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { CardModule } from './components/card/card.module'

import { AppComponent } from './app.component'

import { PokemonService } from './services/PokemonService'

import 'rxjs/add/operator/map'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CardModule,
    HttpModule
  ],
  providers: [ PokemonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
