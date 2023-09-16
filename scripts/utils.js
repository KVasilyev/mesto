
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
  if(evt.keyCode == 27) {
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