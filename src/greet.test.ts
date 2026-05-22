import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('greets a person by name', () => {
    expect(greet('Alice')).toBe('hello, Alice');
  });

  it('greets with empty string', () => {
    expect(greet('')).toBe('hello, ');
  });
});
