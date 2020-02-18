import {
  binarySearch, quickSort, reverse,
} from '../sorting';

describe('Binary Search', () => {
  test('naive case ', () => {
    const inputs = [1, 2, 3];
    expect(binarySearch(2, inputs)).toEqual(2);
  });

  test('midValue too High ', () => {
    const inputs = [2, 7, 12, 55];
    expect(binarySearch(2, inputs)).toEqual(2);
  });

  test('midValue too low ', () => {
    const inputs = [2, 7, 12, 33, 55];
    expect(binarySearch(55, inputs)).toEqual(55);
  });
});

describe('Quick Sort', () => {
  test('naive case ', () => {
    const inputs = [1];
    expect(quickSort(inputs)).toEqual(inputs);
  });

  test('should sort an array of two items', () => {
    const inputs = [55, 1];
    expect(quickSort(inputs)).toEqual([1, 55]);
  });

  test('should sort an array of three items', () => {
    const inputs = [33, 55, 1];
    expect(quickSort(inputs)).toEqual([1, 33, 55]);
  });


  test('should sort an array of n items', () => {
    const inputs = [33, 55, 1, 666, 300];
    expect(quickSort(inputs)).toEqual([1, 33, 55, 300, 666]);
  });
});

describe('Reverse', () => {
  test('naive case ', () => {
    const inputs = [1];
    expect(reverse(inputs)).toEqual(inputs);
  });

  test('should reverse an array', () => {
    const inputs = [1, 2, 3];
    const result = reverse(inputs);
    expect(result).toEqual([3, 2, 1]);
  });
});
