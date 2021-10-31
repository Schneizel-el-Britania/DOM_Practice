'use strict'

const directionButtons = document.querySelectorAll('button');
const demonstrationArea = document.getElementById('demonstration-area');

const directionHandler = ({ target: { dataset: { flexDirection } } }) => demonstrationArea.style.flexDirection = flexDirection;

for (const button of directionButtons) {
  button.addEventListener('click', directionHandler);
}