import '../pages/index.css';

import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import { initialCards, setupObject } from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';

const editFormClass = new FormValidator(setupObject, '#edit-profile');
const addFormClass = new FormValidator(setupObject, '#add-content');
editFormClass.enableValidation();
addFormClass.enableValidation();



// Добавлнения секции с карточками
const cardSection = '.elements__grid';
const popupWithImg = new PopupWithImage('.popup_type_image');
popupWithImg.setEventListeners();  

function addItem(item) {
    const newCard = new Card(item, '#card-template', { 
        handleCardClick: (link, name) => {                     
            popupWithImg.open(link, name); 
        }
    });
    return newCard.generateCard();
}

const itemList = new Section({
    items: initialCards,
    renderer: (item) => {
        const newCard = addItem(item);
        itemList.addItem(newCard);
    }
}, cardSection)

itemList.renderItems();



// Редактирование профиля пользователя
const popupChangeProfileData = new PopupWithForm('.popup_type_edit', changeProfileData);
popupChangeProfileData.setEventListeners();

const openPopupChangeProfileData = document.querySelector('.profile__button-edit');

const userInfo = new UserInfo({ 
    nameSelector:'.profile__names', 
    jobSelector:'.profile__job' 
})

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

function changeProfileData(data) {
    userInfo.setUserInfo(data);
}

openPopupChangeProfileData.addEventListener('click', () => { 
    const {name, job} = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = job;
    popupChangeProfileData.open();
   
});


// Добавление карточки
const popupAddNewCard = new PopupWithForm('.popup_type_add', addNewCard);
popupAddNewCard.setEventListeners();
const openPopupAddNewCard = document.querySelector('.profile__button-add');

openPopupAddNewCard.addEventListener('click', () => {
    popupAddNewCard.open();


});

function addNewCard(data) {
    const newCard = addItem(data);
    itemList.prependAddItem(newCard);
}



