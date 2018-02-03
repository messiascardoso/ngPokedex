import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  destruido: boolean = false
  constructor() { }

  ngOnInit() {
  }

  @Input() pkmn;
  destruirCiclo(){
    this.destruido = true
  }
}
