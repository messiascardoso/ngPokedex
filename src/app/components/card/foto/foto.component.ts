import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Foto Destrida')
  }

  @Input() titulo;
  @Input() url;
}
