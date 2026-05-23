import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('returns greeting with provided name', () => {
    expect(greet('world')).toBe('hello, world');
  });
});
