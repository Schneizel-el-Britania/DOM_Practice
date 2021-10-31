'use strict';

const cardsContainer = document.getElementById('cardsContainer');

const HTMLElements = actors.map((actor)=>createActorCards(actor));

function createActorCards(actor){
  const card = document.createElement('li');
  card.classList.add('cardWrapper');

  const container = document.createElement('article');
  container.classList.add('cardContainer');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('cardImageWrapper');

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(actor.name[0] || 'noname'));
  initials.style.backgroundColor = stringToColour(actor.name || '');

  const img = document.createElement('img');
  img.classList.add('cardImage');
  img.setAttribute('src', actor.photo);
  img.setAttribute('alt', actor.name);
  img.addEventListener('error', handleImageError);

  imgWrapper.append(initials, img);

  const name = document.createElement('h2');
  name.classList.add('cardName');
  name.append(document.createTextNode(actor.name || 'noname'));

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.append(document.createTextNode(actor.birthdate || 'unknow'));

  container.append(imgWrapper, name, description);
  card.append(container);
  return card;
}
cardsContainer.append(...HTMLElements);

/*  handles */
function handleImageError({target}){
  target.remove();
}
/* utilits */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}