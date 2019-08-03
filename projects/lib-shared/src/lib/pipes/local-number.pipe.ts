import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { SessionService } from '../services/session.service';

@Pipe({
    name: 'localNumber'
})
export class LocalNumberPipe implements PipeTransform {
    constructor(private sessionService: SessionService) {}

    transform(value: any, format?: string) {
        if (value == null) {
            return '';
        }

        if (!format) {
            format = '.2-2';
        }

        return formatNumber(value, this.sessionService.locale, format);
    }
}
