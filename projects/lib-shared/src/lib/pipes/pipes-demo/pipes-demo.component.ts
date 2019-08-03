import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'my-pipes-demo',
    styleUrls: ['./pipes-demo.component.scss'],
    templateUrl: './pipes-demo.component.html'
})
export class PipesDemoComponent {
    today = new Date();
    val = 123.45;

    constructor(private session: SessionService) {}

    norway() {
        this.session.registerCulture('nb-NO');
        this.refreshValues();
    }

    sweden() {
        this.session.registerCulture('sv-SE');
        this.refreshValues();
    }

    private refreshValues() {
        this.today = new Date();
        this.val++;
    }
}
