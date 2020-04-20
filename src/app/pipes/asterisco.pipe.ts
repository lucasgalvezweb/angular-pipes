import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisco'
})
export class AsteriscoPipe implements PipeTransform {

  size: number;
  string_oculto: string;

  transform(value: string, mostrar:boolean = false): string {
    return (mostrar) ? '*'.repeat(value.length) : value;
  }

}
