import { Component, Input } from '@angular/core'

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css' ]
})

export class BadgeComponent {
  @Input() tipos: Array<Object> = [];
  constructor() {}
}
