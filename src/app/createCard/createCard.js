import utilities from '../utilities/utilities';
const createCard = obj => {
  const card = document.createElement('ul');
  card.className = 'card';
  Object.entries(obj).forEach(element => {
    const item = document.createElement('li');
    item.textContent = `${utilities.capitalizeLetters(element[0])}: ${
      element[1]
    }`;
    card.appendChild(item);
  });
  return card;
};
export default createCard;
