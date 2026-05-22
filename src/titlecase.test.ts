import { describe, it, expect } from 'vitest';
import { titlecase } from './titlecase';

describe('titlecase', () => {
  it('converts hello world to Hello World', () => {
    expect(titlecase('hello world')).toBe('Hello World');
  });

  it('returns empty string when given empty string', () => {
    expect(titlecase('')).toBe('');
  });

  it('handles single word', () => {
    expect(titlecase('hello')).toBe('Hello');
  });

  it('handles multiple spaces', () => {
    expect(titlecase('hello  world')).toBe('Hello  World');
  });
});
