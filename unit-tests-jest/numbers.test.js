import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers(numbers)', () => {
  it('returns a new array with the even numbers only', () => {
    const result1 = evenNumbers([0, 2, 3, 4, 5, 6, 7, 12, 14]);
    expect(result1).toEqual([0, 2, 4, 6, 12, 14]);
    const result2 = evenNumbers([]);
    expect(result2).toEqual([]);
    const result3 = evenNumbers([-8, -3]);
    expect(result3).toEqual([-8]);
  });
});

describe('toDollars(amount)', () => {
  it('returns a string presentation of dollars and cents from an input number', () => {
    const result1 = toDollars(24.591885);
    expect(result1).toEqual('$24.59');
    const result2 = toDollars(0);
    expect(result2).toEqual('$0.00');
    const result3 = toDollars(6.6e3);
    expect(result3).toEqual('$6600.00');
  });
});

describe('divideBy(numbers, divisor)', () => {
  it('returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.', () => {
    const arr1 = [24, 32, 120, -60, 0];
    const result1 = divideBy(arr1, 4);
    expect(result1).toEqual([6, 8, 30, -15, 0]);
    expect(arr1).toEqual([24, 32, 120, -60, 0]);
    const arr2 = [];
    const result2 = divideBy(arr2, 10);
    expect(result2).toEqual([]);
    expect(arr2).toEqual([]);
  });
});

describe('multiplyBy(obj, multiplier', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary.', () => {
    const obj1 = {
      FirstElement: 50,
      2: 'Isis',
      ThirdElement: false,
      FourthElement: {},
      FifthElement: -20,
    };
    const result1 = multiplyBy(obj1, 6);
    expect(result1).toEqual({
      FirstElement: 300,
      2: 'Isis',
      ThirdElement: false,
      FourthElement: {},
      FifthElement: -120,
    });
    const obj2 = {};
    const result2 = multiplyBy(obj2, 3);
    expect(result2).toEqual({});
  });
});
