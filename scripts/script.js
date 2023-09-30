import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Section from './Section.js';


import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, setupObject} from './data.js';

// const editFormClass = new FormValidator(setupObject, '#edit-profile');
// const addFormClass = new FormValidator(setupObject, '#add-content');
// editFormClass.enableValidation();
// addFormClass.enableValidation();


/* Добавление карточек ----- */
// const popupAddForm = document.querySelector('.popup__add-content');
// const pictureName = document.querySelector('.input_type_description');
// const pictureLink = document.querySelector('.input_type_link'); 

// popupAddForm.addEventListener('submit', function(evt) {   
  
//   evt.preventDefault();
//   addNewContent(pictureName.value, pictureLink.value);
//   closePopup(addPopup);  

//   popupAddForm.reset();
// });



// /* Попап Фотографии */
// const imagePopup = document.querySelector('.popup_type_image');
// const closeImagePopupButton = imagePopup.querySelector('.popup__button-close');

// const imageInPopup = imagePopup.querySelector('.popup__image');
// const captionInPopup = imagePopup.querySelector('.popup__image-caption');

// export function openImagePopup(img, caption) {  
//     imageInPopup.src = img;
//     imageInPopup.alt = caption;
//     captionInPopup.textContent = caption;
//     openPopup(imagePopup);
//   };

// closeImagePopupButton.addEventListener('click', function() {  
//   closePopup(imagePopup);
// });




// /* Попап Редактирования */
// const editPopup = document.querySelector('.popup_type_edit');
// const openEditPopupButton = document.querySelector('.profile__button-edit');
// const closeEditPopupButton = editPopup.querySelector('.popup__button-close');

// openEditPopupButton.addEventListener('click', function() {  
//   editProfileName.value = profileNameInPage.textContent;
//   editProfileJob.value = profileJobInPage.textContent;
//   openPopup(editPopup);
// });

// closeEditPopupButton.addEventListener('click', function() {  
//   closePopup(editPopup);
// });




/* Смена имени и професии */
// const editProfileName = document.querySelector('.input_type_name');
// const profileNameInPage = document.querySelector('.profile__names');

// const editProfileJob = document.querySelector('.input_type_job');
// const profileJobInPage = document.querySelector('.profile__job');

// const popupEditForm = document.querySelector('.popup__edit-profile');

// popupEditForm.addEventListener('submit', changeNameAndJob);

// function changeNameAndJob(evt) {
//   evt.preventDefault();
//   profileNameInPage.textContent = editProfileName.value;
//   profileJobInPage.textContent = editProfileJob.value;
//   closePopup(editPopup);  
// }




// /* Попап Добавления */
// const addPopup = document.querySelector('.popup_type_add');

// const openAddPopupButton = document.querySelector('.profile__button-add');
// const closeAddPopupButton = addPopup.querySelector('.popup__button-close');

// openAddPopupButton.addEventListener('click', function() {  
//   openPopup(addPopup);
// });

// closeAddPopupButton.addEventListener('click', function() {  
//   closePopup(addPopup);
// });







// /* Функция открытия/закрытия попапов */
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', escPopupClose);
//   const buttonElement = popup.querySelector('.popup__submit');
// }

// function closePopup(popup) {  
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', escPopupClose);
// }


// /* ESC закрытия попапов */
// function escPopupClose(evt) {
//   if(evt.key == 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };


// /* Overlay закрытия попапов */
// const allPopups = document.querySelectorAll('.popup');

// allPopups.forEach(function(obj) {
//   obj.addEventListener('click', overlayPopupClose);
// });

// function overlayPopupClose(evt) {
//   if(evt.target.classList.contains('popup')) {
//     closePopup(evt.target);
//   }
// }




// export function openCard(img, caption) {
//   const imagePopup = document.querySelector('.popup_type_image');
//   const imageInPopup = imagePopup.querySelector('.popup__image');
//   const captionInPopup = imagePopup.querySelector('.popup__image-caption');

//   imageInPopup.src = img;
//   imageInPopup.alt = caption;
//   captionInPopup.textContent = caption;
// }


// /* Наполнение */
// const cardContainer = document.querySelector('.elements__grid');
// initialCards.forEach((item) => {
//   const card = new Card(item.name, item.link, '#card-template');
//   // const card = new Card(item.name, item.link, '#card-template', openImagePopup);
//   const cardElement = card.generateCard();
//   cardContainer.append(cardElement);
// });


// /* Добавление новой карточки */
// function addNewContent(pictureName, pictureLink) {
//   const card = new Card(pictureName, pictureLink, '#card-template');
//   // const card = new Card(pictureName, pictureLink, '#card-template', openImagePopup);
//   const cardElement = card.createCard();
//   cardContainer.prepend(cardElement);
// }

// document.querySelector('.profile__button-add').addEventListener('click', () => {
//   const addPopup = new PopupWithForm('.popup_type_add');
//   addPopup.open();
// })

// document.querySelector('.profile__button-edit').addEventListener('click', () => {
//   const addPopup = new PopupWithForm('.popup_type_edit');
//   addPopup.open();
// })






  // const imageInPopup = this_.querySelector('.popup__image');
  // const captionInPopup = document.querySelector('.popup__image-caption');

  // imageInPopup.src = img;
  // imageInPopup.alt = caption;
  // captionInPopup.textContent = caption;


// const itemsList = new Section({
//     items: initialCards,
//     renderer: (card) => {

//     }
// };)






// export function handleCardClick(link, name) { 
//   const popupWithImg = new PopupWithImage('.popup_type_image');            
//   popupWithImg.open(link, name); 
// };

/* Пользовательская информация */
// const editButton = document.querySelector('.profile__button-edit');
// const nameInput = document.querySelector('.input_type_name');
// const jobInput = document.querySelector('.input_type_job');

// const userInfo = new UserInfo({
//   nameSelector: ".profile__names",
//   jobSelector: ".profile__job"
// });

// function rewriteUserInfo() {
//   userInfo.setUserInfo({name: nameInput.value, job: jobInput.value});
// }



// editButton.addEventListener('click', () => {
//   const form = new PopupWithForm('.popup_type_edit', rewriteUserInfo);

//   const {name , job} = userInfo.getUserInfo()
//   nameInput.value = name;
//   jobInput.value = job;
  
//   form.open();
// });


/* Пользовательская информация */
// const addButton = document.querySelector('.profile__button-add');
// const descriptionInput = document.querySelector('.input_type_description');
// const linkInput = document.querySelector('.input_type_link');


// function addCard() {
  

// }

// addButton.addEventListener('click', () => {
//   const form = new PopupWithForm('.popup_type_add', addCard);
//   const {name, link} = form._getInputValues();
//   form.open();
// });




