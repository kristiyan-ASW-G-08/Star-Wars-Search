import { capitalizeLetters } from "../utilities/utilities";
const createCard = obj => {
  const card = document.createElement("ul");
  card.className = "card";
  Object.entries(obj).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${capitalizeLetters(key)}: ${value}`;
    card.appendChild(li);
  });
  return card;
};
export default createCard;
