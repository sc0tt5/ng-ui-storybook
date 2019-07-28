import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() icon: string;

  constructor() {}

  onClick(event: any) {
    console.log('my-button onClick:::', event);
  }
}
