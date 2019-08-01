import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'my-button',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input() message: string;
    @Input() text: string;
    @Input() disabled: boolean;
    @Input() icon: string;
    @Output() myEvent: EventEmitter<any> = new EventEmitter();

    constructor(private commonService: CommonService) {}

    onClick() {
        this.commonService.saySomething(this.message);
        this.myEvent.emit(this.message);
    }
}
