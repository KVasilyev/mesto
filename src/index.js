import '../pages/index.css';

import Popup from '../scripts/Popup.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';
import Section from '../scripts/Section.js';
import Card from '../scripts/Card.js';
import { initialCards, setupObject } from '../scripts/constants.js';
import {FormValidator} from '../scripts/FormValidator.js';

const editFormClass = new FormValidator(setupObject, '#edit-profile');
const addFormClass = new FormValidator(setupObject, '#add-content');
editFormClass.enableValidation();
addFormClass.enableValidation();



// Добавлнения секции с карточками
const cardSection = '.elements__grid';

function addItem(item) {
    const newCard = new Card(item, '#card-template', { 
        handleCardClick: (link, name) => {
            const popupWithImg = new PopupWithImage('.popup_type_image');            
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
const openPopupChangeProfileData = document.querySelector('.profile__button-edit');

const userInfo = new UserInfo({ 
    nameSelector:'.profile__names', 
    jobSelector:'.profile__job' 
})

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

function changeProfileData(data) {
    userInfo.setUserInfo(data.name, data.job);
}

openPopupChangeProfileData.addEventListener('click', () => { 
    const actualUserInfo = { 
        name : userInfo.getUserInfo().name, 
        job :  userInfo.getUserInfo().job
    } 
    nameInput.value = actualUserInfo.name;
    jobInput.value = actualUserInfo.job;

    popupChangeProfileData.open();
});


// Добавление карточки
const popupAddNewCard = new PopupWithForm('.popup_type_add', addNewCard);
const openPopupAddNewCard = document.querySelector('.profile__button-add');

openPopupAddNewCard.addEventListener('click', () => {
    popupAddNewCard.open();
});

function addNewCard(data) {
    const cardInfo = { 
        name: data.description, 
        link: data.url 
    }
    const newCard = addItem(cardInfo);
    itemList.prependAddItem(newCard);

}



