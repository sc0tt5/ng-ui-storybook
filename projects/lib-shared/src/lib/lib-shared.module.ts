import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component'; // '@lib/components';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { LocalNumberPipe } from './pipes/local-number.pipe';
import { CommonService } from './services/common.service';
import { PipesDemoComponent } from './pipes/pipes-demo/pipes-demo.component';

@NgModule({
    declarations: [ButtonComponent, PipesDemoComponent, LocalDatePipe, LocalNumberPipe],
    providers: [CommonService],
    imports: [CommonModule],
    exports: [ButtonComponent, PipesDemoComponent, LocalDatePipe, LocalNumberPipe]
})
export class LibSharedModule {}
