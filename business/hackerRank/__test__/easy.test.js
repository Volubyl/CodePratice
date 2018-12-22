import {
  cavityMap,
  gradingStudents,
  gradingStudentsV2,
  appleAndOranges,
  isOnDaHouse
} from "../easy";

test("cavity Map", () => {
  let grid = ["1112", "1912", "1234", "1892"];
  expect(cavityMap(grid)).toEqual(["1112", "1X12", "1234", "1892"]);

  grid = [
    "487439976",
    "941722848",
    "762937721",
    "715119884",
    "338252827",
    "115382853",
    "281723939",
    "694681393",
    "746341945"
  ];

  const result = [
    "487439976",
    "941722848",
    "762X37721",
    "71511X884",
    "33X252827",
    "1153X2853",
    "281X23X39",
    "6X46X13X3",
    "746341945"
  ];

  expect(cavityMap(grid)).toEqual(result);

  grid = ["187", "198", "145"];
  expect(cavityMap(grid)).toEqual(["187", "1X8", "145"]);

  grid = ["9999", "9889", "9889", "1111"];
  expect(cavityMap(grid)).toEqual(["9999", "9889", "9889", "1111"]);
});

test("grading Students", () => {
  let inputs = [0, 100, 35, 73, 12, 38];

  expect(gradingStudents(inputs)).toEqual([0, 100, 35, 75, 12, 40]);
  expect(gradingStudentsV2(inputs)).toEqual([0, 100, 35, 75, 12, 40]);
});

test("oranges and apples", () => {
  expect(appleAndOranges(7, 11, 5, 15, [-2, 1, 2], [5, -6])).toEqual([1, 1]);
  expect(appleAndOranges(7, 11, 5, 15, [0, -100, 2], [0, -6])).toEqual([1, 1]);
});

test("isOnDaHouse", () => {
  expect(isOnDaHouse(7, 11, 5)).toBe(false);
  expect(isOnDaHouse(7, 11, 7)).toBe(true);
  expect(isOnDaHouse(7, 11, 11)).toBe(true);
  expect(isOnDaHouse(7, 11, 10)).toBe(true);
});
