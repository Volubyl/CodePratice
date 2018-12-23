export const getMiddleCharacter = string => {
  const charArray = string.split("");
  if (charArray.length === 1) {
    return string;
  }
  const middleLenght = charArray.length / 2;
  const flooredLetter = Math.floor(middleLenght);
  let middleString = "";
  if (charArray.length % 2 === 0) {
    middleString = middleString
      .concat(charArray[flooredLetter - 1])
      .concat(charArray[flooredLetter]);
  } else {
    middleString = middleString.concat(charArray[flooredLetter]);
  }
  return middleString;
};

export const tribonacci = (signature, n) => {
  if (n === 0) return [];
  if (signature.length > n) return signature.slice(0, n);
  const suite = signature;
  if (suite.length < n) {
    const next = suite.slice(-3).reduce((a, b) => a + b);
    suite.push(next);
    tribonacci(suite, n);
  }

  return suite;
};

export const tickets = peopleInLine => {
  let remainingFunds = 0;
  const ticketPrice = 25;
  let answer = "YES";

  peopleInLine.some(item => {
    const moneyToReturn = item - ticketPrice;
    if (moneyToReturn === 0) {
      remainingFunds += item;
      return false;
    }

    const remainingFundsAfterOperation = remainingFunds - moneyToReturn;
    if (remainingFundsAfterOperation >= 0) {
      remainingFunds = remainingFundsAfterOperation;
      return false;
    } else {
      answer = "NO";
      return true;
    }
  });

  return answer;
};
