import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mileToKmPipe'
})
export class MileToKmPipePipe implements PipeTransform {

  transform(value: number, targetUnit:string): unknown {
    console.log(value);
    if(!value)
      return '';

      switch(targetUnit){
        case 'km':
          return value * 1.60943;
        case 'm':
          return value * 1.60943 * 1000;
        case 'cm':
          return value * 1.60943 * 1000 * 1000;
          default:
            return new Error("Target unit noe supported");
      }

   
  }

}
