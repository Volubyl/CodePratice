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

// this variant will break as soon as the clerk could not return money to a customer
// he won't have the possibility to ask someone to help him to return the due
export const tickets2 = peopleInLine => {
  let remainingFunds = 0;
  const ticketPrice = 25;
  let moneyToReturn = 0;
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

export const tickets = peopleInLine => {
  let remainingFunds = 0;
  const ticketPrice = 25;
  let moneyToReturn = 0;
  let answer = "YES";

  peopleInLine.forEach(item => {
    const moneyToReturn = item - ticketPrice;
    if (moneyToReturn === 0) {
      remainingFunds += item;
    }
    const remainingFundsAfterOperation = remainingFunds - moneyToReturn;
    if (remainingFundsAfterOperation >= 0) {
      remainingFunds = remainingFundsAfterOperation;
      answer = "YES";
    } else {
      answer = "NO";
    }
  });

  return answer;
};

export const buildHistogram = letters => {
  let workingLetters = [...letters].sort();
  let prev = undefined;
  let histogram = {};

  workingLetters.forEach(item => {
    if (prev !== item) {
      histogram = {
        ...histogram,
        [item]: 1
      };
    } else {
      histogram = {
        ...histogram,
        [item]: histogram[item] + 1
      };
    }
    prev = item;
  });

  return histogram;
};

export const duplicateEncode = word => {
  const letters = word.toLowerCase().split("");
  const histogram = buildHistogram(letters);
  const encodedLetters = letters.map(item => {
    const letter = histogram[item];
    if (letter === 1) {
      return "(";
    }
    return ")";
  });
  return encodedLetters.join("");
};

export const formatPhoneNumber = phoneNumber => {
  let workingPhoneNumber = phoneNumber;
  workingPhoneNumber = workingPhoneNumber.replace(/-|\s/g, "");
  const arrayOfNumber = workingPhoneNumber.split("");

  const reduceFunction = (accumalator, currentItem, index) => {
    if ((index + 1) % 3 === 0 && index !== 0) {
      return accumalator.concat(currentItem + "-");
    }
    return accumalator.concat(currentItem);
  };

  const mappedWorkingPhoneNumber = arrayOfNumber.reduce(reduceFunction, "");

  return mappedWorkingPhoneNumber;
};
