import { Pipe, PipeTransform } from '@angular/core';

/*Pipe to iterate *ngFor over an object */
@Pipe({ name: 'entries',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.entries(value)//.map(key => value[key]);
    }
}
