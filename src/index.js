'use strict';
import './style/index.scss';
import getData from './app/getData/getData';
import utilities from './app/utilities/utilities';
import createCard from './app/createCard/createCard';
import displayError from './app/displayError/displayError';
import switchSides from './app/switchSides/switchSides';
switchSides();
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const option = e.target.elements.option.value;
  const url = `https://swapi.co/api/${option}/?search=${name}`;
  const cardSection = document.querySelector('.card-section');
  getData(url)
    .then(data => {
      const obj = data.results[0];
      const processedObject = utilities.processObject(obj);
      const card = createCard(processedObject);
      if (cardSection.firstChild) {
        cardSection.firstChild.remove();
      }
      cardSection.appendChild(card);
    })
    .catch(error => displayError("Sorry there was an error!!!"));
});
