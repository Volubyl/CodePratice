import {
  veryBigSum,
  diagonalSum,
  plusOrMinus,
  compareTiplets,
  staircase,
  minMaxSum,
  minMaxSumVersion2,
  birthdayCakeCandle,
  timeConversion
} from "../business";

test("a very big sum", () => {
  const arrayLenght = 5;

  const arrayNumber = [
    1000000001,
    1000000002,
    1000000003,
    1000000004,
    1000000005
  ];
  expect(veryBigSum(arrayLenght, arrayNumber)).toBe(5000000015);
});

test("diagonalSum", () => {
  const inputs = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
  expect(diagonalSum(inputs)).toBe(15);
});

test("Plus or minus", () => {
  const inputs = [-4, 3, -9, 0, 4, 1];
  expect(plusOrMinus(inputs)).toEqual([
    0.5,
    0.3333333333333333,
    0.16666666666666666
  ]);
});

test("Compare tiplets", () => {
  expect(compareTiplets(5, 6, 7, 3, 6, 10)).toEqual([1, 1]);
});

test("Stair cases", () => {
  expect(staircase(6)).toEqual();
});

test("Min Max Sum", () => {
  let inputs = [1, 2, 3, 4, 5];

  // here the max number eq. 6
  // here the min number eq. 1

  // the min number we could have is :  1+2+3+4+= 10
  // the max number we could have is :  2+3+4+5 = 14
  expect(minMaxSum(inputs)).toEqual([10, 14]);

  inputs = [1, 2, 3, 4, 6];

  // here the max number eq. 6
  // here the min number eq. 0

  // the min number we could have is :  1 + 2 +3 + 4 = 10
  // the max number we could have is :  2+3+4+5+6 = 15

  expect(minMaxSum(inputs)).toEqual([10, 15]);

  inputs = [1, 2, 3, 4, Math.pow(10, 9)];

  // here the max number eq. 10^9 = 1 000 000 000
  // here the min number eq. 0

  // the min number we could have is :  1 + 2 +3 + 4 = 10
  // the max number we could have is :  2+3+4+5+1 000 000 000 =  1 000 000 009

  expect(minMaxSum(inputs)).toEqual([10, 1000000009]);
});

test("Min Max Sum Version 2 ", () => {
  let inputs = [1, 2, 3, 4, 5];

  // here the max number eq. 6
  // here the min number eq. 1

  // the min number we could have is :  1+2+3+4+= 10
  // the max number we could have is :  2+3+4+5 = 14
  expect(minMaxSumVersion2(inputs)).toEqual([10, 14]);

  inputs = [1, 2, 3, 4, 6];

  // here the max number eq. 6
  // here the min number eq. 0

  // the min number we could have is :  1 + 2 +3 + 4 = 10
  // the max number we could have is :  2+3+4+5+6 = 15

  expect(minMaxSumVersion2(inputs)).toEqual([10, 15]);

  inputs = [1, 2, 3, 4, Math.pow(10, 9)];

  // here the max number eq. 10^9 = 1 000 000 000
  // here the min number eq. 1

  // the min number we could have is :  1 + 2 +3 + 4 = 10
  // the max number we could have is :  2+3+4+5+1 000 000 000 =  1 000 000 009

  expect(minMaxSumVersion2(inputs)).toEqual([10, 1000000009]);
});

test("Birthday Cake Candle", () => {
  let inputs = [3, 2, 1, 3];
  // max number  = 3 and 2 max number occurences
  expect(birthdayCakeCandle(inputs)).toBe(2);

  inputs = [1, 1, 2, 1];
  // max number  = 2 and 1 max number occurences
  expect(birthdayCakeCandle(inputs)).toBe(1);
});

test("Time conversion", () => {
  // PM string
  let string = "07:05:45PM";

  expect(timeConversion(string)).toBe("19:05:45");

  string = "12:05:45PM";

  expect(timeConversion(string)).toBe("12:05:45");

  // AM string
  string = "12:05:39AM";
  expect(timeConversion(string)).toBe("00:05:39");

  string = "04:59:59AM";

  expect(timeConversion(string)).toBe("04:59:59");
});
