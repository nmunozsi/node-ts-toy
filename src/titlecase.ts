import { uppercase } from './uppercase.js';
import { lowercase } from './lowercase.js';

export function titlecase(s: string): string {
  if (s.length === 0) return '';

  return s
    .split(' ')
    .map((word) => {
      if (word.length === 0) return word;
      const first = word[0]!;
      const rest = word.slice(1);
      return uppercase(first) + lowercase(rest);
    })
    .join(' ');
}
