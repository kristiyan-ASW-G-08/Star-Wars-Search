export const processObject = obj => {
  const unNeededKeys = ["edited", "created", "ur;"];
  const urlRegex = RegExp("^(http|https):");
  return Object.entries(obj).reduce((acc, [key, value]) => {
    console.log(acc, key);
    if (
      !unNeededKeys.includes(key) &&
      !Array.isArray(value) &&
      !urlRegex.test(value)
    ) {
      return { ...acc, [key.split("_").join(" ")]: value };
    }
    return acc;
  }, {});
};
export const capitalizeLetters = str => {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ");
};
export const setToLS = (target, value) =>
  localStorage.setItem(target, JSON.stringify(value));
