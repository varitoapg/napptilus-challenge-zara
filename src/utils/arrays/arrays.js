export const removeDuplicatesById = (array) => {
  const uniqueObjects = array.reduce((accumulator, current) => {
    if (!accumulator.some((item) => item.id === current.id)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  return uniqueObjects;
};
