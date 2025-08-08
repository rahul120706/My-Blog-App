import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit'
})
export class WordLimitPipe implements PipeTransform {
  transform(value: string, minWords: number = 10): string {
    if (!value) return '';

    const words = value.trim().split(/\s+/);
    if (words.length <= minWords) {
      return value;
    }
    return words.slice(0, minWords).join(' ') + '...';
  }
}
