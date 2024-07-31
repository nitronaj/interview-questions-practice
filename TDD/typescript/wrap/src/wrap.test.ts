import { wrap } from './wrap';

describe('Wrap function', () => {
  it('should test wrap function', () => {
    expect(wrap('', 1)).toBe('');
    expect(wrap('x', 1)).toBe('x');
    expect(wrap('xx', 1)).toBe('x\nx');
    expect(wrap('xx', 2)).toBe('xx');
    expect(wrap('xxx', 1)).toBe('x\nx\nx');
    expect(wrap('xxx', 2)).toBe('xx\nx');
    expect(wrap('xxx', 3)).toBe('xxx');
    expect(wrap('x x', 1)).toBe('x\nx');
    expect(wrap('x x', 2)).toBe('x\nx');
    expect(wrap('x x', 3)).toBe('x x');
    expect(wrap('x x x', 1)).toBe('x\nx\nx');
    expect(wrap('x x x', 2)).toBe('x\nx\nx');
    expect(wrap('x x x', 3)).toBe('x x\nx');
    expect(wrap('x x x', 4)).toBe('x x\nx');
    expect(wrap('x x x', 5)).toBe('x x x');
    expect(wrap('xx xx', 1)).toBe('x\nx\nx\nx');
    expect(wrap('xx xx', 2)).toBe('xx\nxx');
    expect(wrap('xx xx', 3)).toBe('xx\nxx');
    expect(wrap('xx xx', 4)).toBe('xx\nxx');
    expect(wrap('xx xx', 5)).toBe('xx xx');
    expect(wrap('xx xx xx', 1)).toBe('x\nx\nx\nx\nx\nx');
    expect(wrap('xx xx xx', 2)).toBe('xx\nxx\nxx');
    expect(wrap('xx xx xx', 3)).toBe('xx\nxx\nxx');
    expect(wrap('xx xx xx', 4)).toBe('xx\nxx\nxx');
    expect(wrap('xx xx xx', 5)).toBe('xx xx\nxx');
    expect(wrap('xx xx xx', 6)).toBe('xx xx\nxx');
    expect(wrap('xx xx xx', 7)).toBe('xx xx\nxx');
    expect(wrap('xx xx xx', 8)).toBe('xx xx xx');

    const text =
      'Four score and seven years ago our fathers brought forth upon this continent a new nation conceived in liberty and dedicated to the proposition that all men are created';
	const expected = `Four score and
seven years ago
our fathers
brought forth
upon this
continent a new
nation
conceived in
liberty and
dedicated to
the proposition
that all men
are created`;

    expect(wrap(text, 15)).toBe(expected);
  });
});
