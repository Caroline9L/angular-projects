import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');

    // if(value.length === 0 || filterString === '') {
    //   return value;
    // }
    // const resultArray = [];
    // for (const item of value) {
    //   return resultArray(value).reverse.join('');
    // }
  }

}
