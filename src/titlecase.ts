import { uppercase } from './uppercase.js';
import { lowercase } from './lowercase.js';

export function titlecase(s: string): string {
  if (!s) return '';

  return s
    .split(' ')
    .map((word) => {
      if (word.length === 0) return '';
      return uppercase(word[0]!) + lowercase(word.slice(1));
    })
    .join(' ');
}
