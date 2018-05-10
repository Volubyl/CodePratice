import { cavityMap } from "../business";

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
