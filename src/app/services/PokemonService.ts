import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class PokemonService {
  private baseUrl: String = 'https://pokeapi.co/api/v2'
  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  procurarPkmn (param) {
    return this.http.get(`${this.baseUrl}/pokemon/${param}/`).map( pkmn => pkmn.json())
  }
}