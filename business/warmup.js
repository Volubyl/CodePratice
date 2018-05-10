export const veryBigSum = (n, ar) => {
  let sum = 0;
  for (let index = 0; index < n; index++) {
    sum += ar[index];
  }
  return sum;
};

export const diagonalSum = items => {
  let sumA = 0;
  let sumB = 0;

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    sumB += element[items.length - i - 1];
    sumA += element[i];
  }

  return Math.abs(sumA - sumB);
};

// https://www.hackerrank.com/challenges/plus-minus/problem

export const plusOrMinus = array => {
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  const length = array.length;

  array.forEach(element => {
    if (element > 0) {
      positive++;
    } else if (element < 0) {
      negative++;
    } else {
      zeros++;
    }
  });

  return [positive / length, negative / length, zeros / length];
};

//https://www.hackerrank.com/challenges/compare-the-triplets/problem

export const compareTiplets = (a0, a1, a2, b0, b1, b2) => {
  let aScore = 0;
  let bScore = 0;

  if (a0 > b0) {
    aScore++;
  } else if (a0 < b0) {
    bScore++;
  }

  if (a1 > b1) {
    aScore++;
  } else if (a1 < b1) {
    bScore++;
  }

  if (a2 > b2) {
    aScore++;
  } else if (a2 < b2) {
    bScore++;
  }

  return [aScore, bScore];
};

//https://www.hackerrank.com/challenges/staircase/problem
// Time log : 50min

export const staircase = max => {
  let string = "";
  for (let index = 1; index <= max; index++) {
    for (let whiteSpace = 1; whiteSpace <= max - index; whiteSpace++) {
      string += " ";
    }
    for (let hash = 1; hash <= index; hash++) {
      string += "#";
    }

    string += "\n";
  }
};

//https://www.hackerrank.com/challenges/mini-max-sum/problem
// Time log : 50min

export const minMaxSum = array => {
  let maxNumber = 0;
  let minNumber = Math.pow(10, 9);

  let minSum = 0;
  let maxSum = 0;

  array.forEach(item => {
    if (item > maxNumber) {
      maxNumber = item;
    }
    if (item < minNumber) {
      minNumber = item;
    }
  });

  // How to avoid this second loop ?

  array.forEach(item => {
    if (item !== maxNumber) {
      minSum += item;
    }
    if (item !== minNumber) {
      maxSum += item;
    }
  });

  return [minSum, maxSum];
};

// Time log : 25min
export const minMaxSumVersion2 = array => {
  let maxNumber = 0;
  let minNumber = Math.pow(10, 9);

  let sum = 0;

  array.forEach(item => {
    if (item > maxNumber) {
      maxNumber = item;
    }
    if (item < minNumber) {
      minNumber = item;
    }
    sum += item;
  });

  return [sum - maxNumber, sum - minNumber];
};

// Time log : 25min
export const birthdayCakeCandle = arr => {
  let maxNumber = 0;
  let maxNumberOccurence = 0;
  arr.forEach(input => {
    if (input >= maxNumber) {
      if (input === maxNumber) {
        maxNumberOccurence += 1;
      } else {
        maxNumberOccurence = 1;
      }
      maxNumber = input;
    }
  });

  return maxNumberOccurence;
};

//https://www.hackerrank.com/challenges/time-conversion/problem

// Time log : 50min

export const timeConversion = string => {
  let [hour, minutes, seconds] = string
    .substring(0, string.length - 2)
    .split(":");
  const AMPM = string.substring(string.length - 2, string.length);

  if (AMPM === "PM" && hour != "12") {
    hour = (Number(hour) + 12).toString();
  }

  if (AMPM === "AM" && hour == "12") {
    hour = "00";
  }

  return `${hour}:${minutes}:${seconds}`;
};
