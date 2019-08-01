import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component'; // '@lib/components';
import { CommonService } from './services/common.service';

@NgModule({
    declarations: [ButtonComponent],
    providers: [CommonService],
    imports: [CommonModule],
    exports: [ButtonComponent]
})
export class LibSharedModule {}
