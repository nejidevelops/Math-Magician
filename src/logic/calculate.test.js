import calculate from './calculate';

describe('calculate', () => {
  it('should reset the calculator data object when buttonName is AC', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });

  it('should update next with the buttonName when it is a number', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '9';
    const expected = {
      total: '10',
      next: '59',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });

  it('should update next when there is an operation', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '3';
    const expected = {
      total: '10',
      next: '53',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });
});
