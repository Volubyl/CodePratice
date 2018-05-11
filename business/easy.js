export const cavityMap = grid => {
  const result = [];
  result.push(grid[0]);

  for (let y = 1; y < grid.length - 1; y++) {
    const element = grid[y];
    let replacedString = element;
    for (let x = 1; x < element.length - 1; x++) {
      let item = grid[y][x];

      const top = grid[y - 1][x];
      const bottom = grid[y + 1][x];
      const left = grid[y][x - 1];
      const right = grid[y][x + 1];

      if (item > top && item > left && item > bottom && item > right) {
        replacedString = replacedString.replace(item, "X");
      }
    }
    result.push(replacedString);
  }

  result.push(grid[grid.length - 1]);
  return result;
};

//https://www.hackerrank.com/challenges/grading/problem

//Time log : 30 min;

//what's the most optimised ? V1 or V2 ?
export const gradingStudents = array => {
  const result = [];

  array.forEach(grade => {
    if (grade >= 38) {
      const multipleOf5 = grade - grade % 5 + 5;
      if (multipleOf5 - grade < 3) {
        grade = multipleOf5;
      }
      result.push(grade);
    } else {
      result.push(grade);
    }
  });

  return result;
};

export const gradingStudentsV2 = array => {
  const result = [];

  array.forEach(grade => {
    const multipleOf5 = grade - grade % 5 + 5;
    if (grade >= 38 && multipleOf5 - grade < 3) {
      grade = multipleOf5;
    }
    result.push(grade);
  });

  return result;
};
