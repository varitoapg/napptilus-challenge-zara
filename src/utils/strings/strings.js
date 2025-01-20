export const addSpaceBeforeUppercase = (word) => {
  if (word.toUpperCase() === word) return word;

  return word
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z])/g, "$1 $2");
};
