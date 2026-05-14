import { describe, it, expect } from 'vitest';
import { titlecase } from './titlecase';

describe('titlecase', () => {
  it('capitalises the first letter of each word', () => {
    expect(titlecase('hello world')).toBe('Hello World');
  });

  it('returns empty string for empty input', () => {
    expect(titlecase('')).toBe('');
  });
});
