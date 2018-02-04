import { Component, Input } from '@angular/core'
import { PokemonService } from './../../services/PokemonService'

@Component({
  selector: 'auto-complete',
  templateUrl: './autocomplete.component.html',
  styleUrls: [ './autocomplete.component.css' ]
})

export class AutocompleteComponent {
  resultados: Array<Object> = []
  selecionados: Array<Object> = []
  pokemonService: PokemonService
  loadingIcon: Boolean = false;
  erros: Boolean = false;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService
  }

  procurar(pkmn: string) {
    this.loadingIcon = true
    this.pokemonService.procurarPkmn(pkmn).subscribe(
      (resp) => {
        if (resp) {
          this.resultados[0] = resp
        }
        this.loadingIcon = false
      }, (err) => {
        this.erros = true
        this.loadingIcon = false
        console.error(err)
      })
  }

  limparResultados() {
    this.resultados = [];
    this.erros = false;
  }
}
