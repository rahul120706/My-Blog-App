import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit'
})
export class WordLimitPipe implements PipeTransform {
  transform(value: string | null | undefined, limit: number = 15): string {
    if (!value) return '';

    const words = value.trim().split(/\s+/);

    if (words.length <= limit) {
      return value;
    }

    return words.slice(0, limit).join(' ') + '...';
  }
}
