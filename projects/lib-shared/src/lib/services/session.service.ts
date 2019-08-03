import { registerLocaleData } from '@angular/common';
import localeNorwegian from '@angular/common/locales/nb';
import localeSwedish from '@angular/common/locales/sv';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {
    private languageCode: string;

    set locale(value: string) {
        this.languageCode = value;
    }
    get locale(): string {
        return this.languageCode || 'en-US';
    }

    registerCulture(culture: string) {
        if (!culture) {
            return;
        }
        this.locale = culture;

        // register locale data
        switch (culture) {
            case 'nb-NO':
                registerLocaleData(localeNorwegian);
                break;
            case 'sv-SE':
                registerLocaleData(localeSwedish);
                break;
        }
    }
}
