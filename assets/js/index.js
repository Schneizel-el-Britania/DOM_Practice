'use strict';
const imagesDB = [
  'https://www.bookbell.in/wp-content/uploads/2018/08/sea-01.jpg',
  'https://compass-ssl.xboxlive.com/assets/fd/df/fddfac17-875c-4910-ab1f-3f18dd9962b3.jpg?n=Parallax_Sections_Mobile_01.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/14/64/88/c2/makanda-by-the-sea.jpg',
  'https://bangkokpost.com/photos_content/large/prefix_1/1875/43875/43875-1448252967zcl8ij9iv3.jpg',
  'https://previews.123rf.com/images/muha/muha1205/muha120500089/13658592-tropical-beach-andaman-sea-thailand.jpg'
];

function updateView() {
  image.setAttribute('src', slider.currentSlide);
}

function createNavIndicators() {
  for (let i = 0; i < slider.images.length; i++) {
    const navElement = document.createElement('div');
    navElement.className = 'nav-indicator';
    document.getElementsByClassName('nav-indicator-container')[0].appendChild(navElement);
  }
}

function updateNavIdicatorStatus(previousIndex = slider.prevIndex) {
  const navIndicators = document.getElementsByClassName('nav-indicator');
  navIndicators[slider.currentIndex].classList.add('active-nav-indicator');
  navIndicators[previousIndex].classList.remove('active-nav-indicator');
}

const slider = new Slider(imagesDB);

const image = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

updateView();
createNavIndicators();
updateNavIdicatorStatus();


const getSliderIndex = (direction, side) => slider[direction === side ? 'nextIndex' : 'prevIndex'];
const bthSliderHandler = (direction = 'next') => () => {
  slider.currentIndex = getSliderIndex(direction, 'next');
  updateView();
  updateNavIdicatorStatus(getSliderIndex(direction, 'prev'));
}

nextBtn.addEventListener('click', bthSliderHandler('next'));
prevBtn.addEventListener('click', bthSliderHandler('prev'));

image.addEventListener('wheel', (e) => {
  e.deltaY > 0 ? bthSliderHandler('next')() : bthSliderHandler('prev')();
})


/*------------------------------------------- */

const uniqueImg = document.getElementById('uniqueImg');
const uniqueBtn = document.getElementById('uniqueBtn');


const srcAttr = document.createAttribute('src');
srcAttr.value = imagesDB[0];
uniqueImg.setAttributeNode(srcAttr);


uniqueBtn.addEventListener('click', (() => {
  let state = 0;
  return () => srcAttr.value = imagesDB[state++ % 2];
})());
