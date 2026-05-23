import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('greets someone by name', () => {
    expect(greet('Alice')).toBe('hello, Alice');
  });

  it('greets with empty name', () => {
    expect(greet('')).toBe('hello, ');
  });
});
