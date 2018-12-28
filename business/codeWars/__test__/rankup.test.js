import { toJadenCase } from "../rankup";

describe("Jaden case", () => {
  test("should return a jaden cased string", () => {
    const setence = "How can mirrors be real if our eyes aren't real";
    const expectedResult = "How Can Mirrors Be Real If Our Eyes Aren't Real";
    const result = toJadenCase(setence);
    expect(result).toBe(expectedResult);
  });
});
