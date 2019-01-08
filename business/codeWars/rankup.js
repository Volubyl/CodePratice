export const toJadenCase = sentence => {
  const words = sentence.split(" ");
  if (words.length === 0) {
    return null;
  }
  const mappedWords = words.map(word =>
    word.replace(/^(.)/, token => token.toUpperCase())
  );

  return mappedWords.join(" ");
};
