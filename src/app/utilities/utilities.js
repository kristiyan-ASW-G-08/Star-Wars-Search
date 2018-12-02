const processObject = obj => {
  const processedObject = {};
  Object.entries(obj).forEach(element => {
    const first = element[0];
    const second = element[1];
    const urlRegex = RegExp('^(http|https):');
    if (
      first !== 'edited' &&
      first !== 'created' &&
      first !== 'url' &&
      second.length !== 0 &&
      !Array.isArray(second) &&
      !urlRegex.test(second)
    ) {
      const str = element[0];
      const procesedStr = str.split('_').join(' ');
      processedObject[procesedStr] = element[1];
    }
  });
  return processedObject;
};
const capitalizeLetters = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
};
const setToLS = (target, value) => {
  localStorage.setItem(target, JSON.stringify(value));
};
const utilities = {
  processObject,
  capitalizeLetters,
  setToLS
};
export default utilities;
