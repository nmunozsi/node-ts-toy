import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('returns greeting with name', () => {
    expect(greet('Alice')).toBe('hello, Alice');
  });
});
