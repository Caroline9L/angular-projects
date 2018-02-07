import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //will force pipe to rerun whenever data changes -- can cause performance issues
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any { //default setting
  //   return null;
  // }

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      // if (item.status)
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }


}
