export const binarySearch = (valueToFind, values) => {
  const midIndex = Math.floor((values.length - 1) / 2);
  const midValue = values[midIndex];

  if (midValue > valueToFind) {
    return binarySearch(valueToFind, values.slice(0, midIndex));
  }

  if (midValue < valueToFind) {
    return binarySearch(valueToFind, values.slice(midIndex + 1, values.length + 1));
  }

  return midValue;
};

export const quickSort = (inputs) => {
  if (inputs.length < 2) {
    return inputs;
  }

  if (inputs[1] < inputs[0]) {
    return [inputs[1], inputs[0]];
  }

  const pivot = inputs[0];
  const greater = inputs.filter((item) => item > pivot);
  const less = inputs.filter((item) => item < pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};


export const reverse = (inputs) => {
  if (inputs.length < 2) {
    return inputs;
  }
  const lastItem = inputs[inputs.length - 1];
  inputs.pop(); // iky because pop mutates the object
  return [lastItem, ...reverse(inputs)];
};
