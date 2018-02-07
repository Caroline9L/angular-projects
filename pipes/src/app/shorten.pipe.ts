import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
	transform(value: any, limit: number) {//necessary method. Limit allows user to input custom value; if the parameter is not specified, the pipe will not be applied
		if (value.length > limit) {
			return value.substr(0, limit) + '...'; //return is necessary. Substr is a shortening function
		}
		return value;
	}
}