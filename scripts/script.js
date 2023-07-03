/* Наполнение */
const cardContainer = document.querySelector('.elements__grid');
const cardTemplate = document.querySelector('#card-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

for (i = 0; i < initialCards.length; i++) {
  addNewContent(initialCards[i].name, initialCards[i].link, 'append');
}




/* Добавление контента */
function addNewContent(name, link, addMethod) {
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  cardElement.querySelector('.elements__image').src = link;
  cardElement.querySelector('.elements__image').alt = name;
  cardElement.querySelector('.elements__name').textContent = name;

  cardElement.querySelector('.elements__button-delete').addEventListener('click', function () {
    cardElement.remove();
  });

  cardElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-like_active');
  });

  switch(addMethod) {
    case 'append':
    cardContainer.append(cardElement);
    break;
    case 'prepend':
    cardContainer.prepend(cardElement);
    break;
    default :
    cardContainer.append(cardElement);
  } 

  cardElement.querySelector('.elements__image').addEventListener('click', function () {    
    openImagePopup(cardElement.querySelector('.elements__image').src, cardElement.querySelector('.elements__image').alt)
  });
}




/* Попап Фотографии */
const imagePopup = document.querySelector('.popup_type_image');
const closeImagePopupButton = imagePopup.querySelector('.popup__button-close');
const imagePopupButton = document.querySelectorAll('.elements__image');

const imageInPopup = imagePopup.querySelector('.popup__image');
const captionInPopup = imagePopup.querySelector('.popup__image-caption');

function openImagePopup(img, caption) {  
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

editProfileName.value = profileNameInPage.textContent;
editProfileJob.value = profileJobInPage.textContent;

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




/* Добавление карточек */
addPopup.addEventListener('submit', function(evt) {  
  const pictureName = document.querySelector('.input_type_description').value;
  const pictureLink = document.querySelector('.input_type_link').value;

  evt.preventDefault();
  addNewContent(pictureName, pictureLink, 'prepend');
  closePopup(addPopup);  
});




/* Функция открытия/закрытия попапов */
function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}





