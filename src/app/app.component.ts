import { Component, OnInit } from '@angular/core'
import { PokemonService } from './services/PokemonService'
import { forkJoin } from 'rxjs/observable/forkJoin' // equivalente ao Promise.All

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'NgDex';
  pokemonService: PokemonService

  private randomPkmn: Array<ObjectURLOptions> = [];

  constructor (pokemonService: PokemonService){
    this.pokemonService = pokemonService
    /*let pkmonhttp = []
    this.pokemonService = pokemonService
    //Array.from({length: 9}, () => this.pokemonService.procurarPorId(Math.floor(Math.random() * 250)).subscribe(pkmn => this.randomPkmn.push(pkmn)))
    Array.from({length:9}, () => pkmonhttp.push(this.pokemonService.procurarPorId(Math.floor(Math.random() * 250))))
    forkJoin(pkmonhttp).subscribe(results => results.map(result => this.randomPkmn.push(result)))*/
  }

  ngOnInit() {
    let pkmonhttp = []
    //Array.from({length: 9}, () => this.pokemonService.procurarPorId(Math.floor(Math.random() * 250)).subscribe(pkmn => this.randomPkmn.push(pkmn)))
    Array.from({length:9}, () => pkmonhttp.push(this.pokemonService.procurarPorId( (Math.floor(Math.random() * 251)) + 1)))
    forkJoin(pkmonhttp).subscribe(results => results.map(result => this.randomPkmn.push(result)))
  }
}
