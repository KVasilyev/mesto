import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, setupObject} from './data.js';

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



/* Попап Фотографии */
const imagePopup = document.querySelector('.popup_type_image');
const closeImagePopupButton = imagePopup.querySelector('.popup__button-close');

const imageInPopup = imagePopup.querySelector('.popup__image');
const captionInPopup = imagePopup.querySelector('.popup__image-caption');

export function openImagePopup(img, caption) {  
    imageInPopup.src = img;
    imageInPopup.alt = caption;
    captionInPopup.textContent = caption;
    openPopup(imagePopup);
  };

closeImagePopupButton.addEventListener('click', function() {  
  closePopup(imagePopup);
});




/* Попап Редактирования */
const editPopup = document.querySelector('.popup_type_edit');
const openEditPopupButton = document.querySelector('.profile__button-edit');
const closeEditPopupButton = editPopup.querySelector('.popup__button-close');

openEditPopupButton.addEventListener('click', function() {  
  editProfileName.value = profileNameInPage.textContent;
  editProfileJob.value = profileJobInPage.textContent;
  openPopup(editPopup);
});

closeEditPopupButton.addEventListener('click', function() {  
  closePopup(editPopup);
});




/* Смена имени и професии */
const editProfileName = document.querySelector('.input_type_name');
const profileNameInPage = document.querySelector('.profile__names');

const editProfileJob = document.querySelector('.input_type_job');
const profileJobInPage = document.querySelector('.profile__job');

const popupEditForm = document.querySelector('.popup__edit-profile');

popupEditForm.addEventListener('submit', changeNameAndJob);

function changeNameAndJob(evt) {
  evt.preventDefault();
  profileNameInPage.textContent = editProfileName.value;
  profileJobInPage.textContent = editProfileJob.value;
  closePopup(editPopup);  
}




/* Попап Добавления */
const addPopup = document.querySelector('.popup_type_add');

const openAddPopupButton = document.querySelector('.profile__button-add');
const closeAddPopupButton = addPopup.querySelector('.popup__button-close');

openAddPopupButton.addEventListener('click', function() {  
  openPopup(addPopup);
});

closeAddPopupButton.addEventListener('click', function() {  
  closePopup(addPopup);
});







/* Функция открытия/закрытия попапов */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escPopupClose);
  const buttonElement = popup.querySelector('.popup__submit');
}

function closePopup(popup) {  
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escPopupClose);
}


/* ESC закрытия попапов */
function escPopupClose(evt) {
  if(evt.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};


/* Overlay закрытия попапов */
const allPopups = document.querySelectorAll('.popup');

allPopups.forEach(function(obj) {
  obj.addEventListener('click', overlayPopupClose);
});

function overlayPopupClose(evt) {
  if(evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}




/* Наполнение */
const cardContainer = document.querySelector('.elements__grid');
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#card-template', openImagePopup);
  const cardElement = card.generateCard();
  cardContainer.append(cardElement);
});


/* Добавление новой карточки */
function addNewContent(pictureName, pictureLink) {
  const card = new Card(pictureName, pictureLink, '#card-template', openImagePopup);
  const cardElement = card.createCard();
  cardContainer.prepend(cardElement);
}

console.log(new Card(pictureName, pictureLink, '#card-template', openImagePopup));