import {Card} from './card.js';
import {FormValidator} from './validation.js';

const setupObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active'
};

const editFormClass = new FormValidator(setupObject, '#edit-profile');
const addFormClass = new FormValidator(setupObject, '#add-content');
editFormClass.enableValidation();
addFormClass.enableValidation();


/* Добавление карточек ----- */
const popupAddForm = document.querySelector('.popup__add-content');
const pictureName = document.querySelector('.input_type_description');
const pictureLink = document.querySelector('.input_type_link'); 

popupAddForm.addEventListener('submit', function(evt) {   
  
  evt.preventDefault();
  addNewContent(pictureName.value, pictureLink.value);
  closePopup(addPopup);  

  popupAddForm.reset();
});

/* Наполнение */
const cardContainer = document.querySelector('.elements__grid');

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#card-template');
  const cardElement = card.generateCard();
  cardContainer.append(cardElement);
});


/* Добавление новой карточки */
function addNewContent(pictureName, pictureLink) {
  const card = new Card(pictureName, pictureLink, '#card-template');
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
}