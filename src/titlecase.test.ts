import { describe, it, expect } from 'vitest';
import { titlecase } from './titlecase';

describe('titlecase', () => {
  it('capitalizes the first letter of each word', () => {
    expect(titlecase('hello world')).toBe('Hello World');
  });

  it('returns empty string when given empty string', () => {
    expect(titlecase('')).toBe('');
  });
});
