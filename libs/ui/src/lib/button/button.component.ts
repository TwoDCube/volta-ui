import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'v-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  @HostBinding('class.filled')
  filled = false

  constructor() { }

  ngOnInit(): void {
  }

}
