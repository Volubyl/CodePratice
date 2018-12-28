import {
  getMiddleCharacter,
  tribonacci,
  tickets,
  tickets3,
  duplicateEncode,
  buildHistogram,
  formatPhoneNumber
} from "../fundamentals";

describe("getMiddleCharacter", () => {
  test("odd length", () => {
    let string = "lol";
    let expectedResult = "o";
    expect(getMiddleCharacter(string)).toEqual(expectedResult);
  });
  test("even length", () => {
    let string = "middle";
    let expectedResult = "dd";
    expect(getMiddleCharacter(string)).toEqual(expectedResult);
  });
  test("even length -test ", () => {
    let string = "test";
    let expectedResult = "es";
    expect(getMiddleCharacter(string)).toEqual(expectedResult);
  });
});

describe("tribonnaci", () => {
  test("first case", () => {
    let n = 10;
    let signature = [1, 1, 1];
    let expectedResult = [1, 1, 1, 3, 5, 9, 17, 31, 57, 105];
    expect(tribonacci(signature, n)).toEqual(expectedResult);
  });

  test("second case", () => {
    let n = 10;
    let signature = [0, 0, 1];
    let expectedResult = [0, 0, 1, 1, 2, 4, 7, 13, 24, 44];
    expect(tribonacci(signature, n)).toEqual(expectedResult);
  });
  test("third case", () => {
    let n = 0;
    let signature = [300, 200, 100];
    let expectedResult = [];
    expect(tribonacci(signature, n)).toEqual(expectedResult);
  });
  test("fourth case", () => {
    let n = 30;
    let signature = [0.5, 0.5, 0.5];
    let expectedResult = [
      0.5,
      0.5,
      0.5,
      1.5,
      2.5,
      4.5,
      8.5,
      15.5,
      28.5,
      52.5,
      96.5,
      177.5,
      326.5,
      600.5,
      1104.5,
      2031.5,
      3736.5,
      6872.5,
      12640.5,
      23249.5,
      42762.5,
      78652.5,
      144664.5,
      266079.5,
      489396.5,
      900140.5,
      1655616.5,
      3045153.5,
      5600910.5,
      10301680.5
    ];
    expect(tribonacci(signature, n)).toEqual(expectedResult);
  });
  test("fifth case", () => {
    let n = 1;
    let signature = [1, 1, 1];
    let expectedResult = [1];
    expect(tribonacci(signature, n)).toEqual(expectedResult);
  });

  test("sixth case", () => {
    let n = 3;
    let signature = [17, 0, 10];
    let expectedResult = [17, 0, 10];
    expect(tribonacci(signature, n)).toEqual(expectedResult);
  });
});

describe("tickes", () => {
  test("firstCase", () => {
    const poepleInLine = [25, 25, 50, 50];
    expect(tickets(poepleInLine)).toEqual("YES");
  });

  test("secondCase", () => {
    const poepleInLine = [25, 100];
    expect(tickets(poepleInLine)).toEqual("NO");
  });
});

describe("duplicate encode", () => {
  test("buildhistogram", () => {
    let letters = ["a", "b", "a", "b"];
    let expectedResult = {
      a: 2,
      b: 2
    };
    expect(buildHistogram(letters)).toEqual(expectedResult);
  });

  test("3th test case", () => {
    let word = "success";
    let expectedResult = ")())())";
    expect(duplicateEncode(word)).toEqual(expectedResult);
  });
  test("4th test case", () => {
    let word = "recede";
    let expectedResult = "()()()";
    expect(duplicateEncode(word)).toEqual(expectedResult);
  });
  test("second test case", () => {
    let word = "(( @";
    let expectedResult = "))((";
    expect(duplicateEncode(word)).toEqual(expectedResult);
  });
});

test("should format phone number", () => {
  const phoneNumber = "00-44 48 5555 8361";
  const expectedResult = "004-448-555-583-61";
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expectedResult);
});
