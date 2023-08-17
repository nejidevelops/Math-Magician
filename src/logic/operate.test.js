import operate from './operate';

describe('operate', () => {
  it('should add two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('should subtract two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should multiply two numbers', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  it('should divide two numbers', () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });

  it('should handle division by zero', () => {
    expect(operate('8', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    expect(operate('5', '3', '%')).toBe('2');
  });

  it('should handle modulo with divisor zero', () => {
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw error for unknown operation', () => {
    expect(() => operate('1', '2', '')).toThrow("Unknown operation ''");
  });
});
