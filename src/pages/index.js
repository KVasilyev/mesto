import '../pages/index.css';

import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import { initialCards, setupObject } from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import Api from '../components/Api.js';


// Подключение валидации форм
const editFormClass = new FormValidator(setupObject, '#edit-profile');
const addFormClass = new FormValidator(setupObject, '#add-content');
const changeAvatarClass = new FormValidator(setupObject, '#change-avatar');
editFormClass.enableValidation();
addFormClass.enableValidation();
changeAvatarClass.enableValidation();

// API 
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-77',
    headers: {
      authorization: '9204a9cc-6a48-46ae-b1bd-54502917751b',
      'Content-Type': 'application/json'
    }
});


// ———— Наполнение карточками
const cardSection = '.elements__grid';
const itemList = new Section({
    renderer: (item) => {
        const newCard = addItem(item);
        itemList.addItem(newCard);
    }
}, cardSection)

let userId;

function addItem(item) {
    const newCard = new Card(
        item,
        userId,
        '#card-template',
        handleCardClick,
        function openDeletePopup (data) {
            popupDeleteCardConfirm.open(data);               
        },
        setLike,
        unsetLike
        
    );

    // ———— Лайки/Дизлайки
    async function setLike(data) {
        try {
            const res = await api.setLike(data._id);
            newCard.counter(res);
            newCard.like();
        }
        catch(err) {
            console.log(err);
        }
    }

    async function unsetLike(data) {
        try {
            const res = await api.unsetLike(data._id);
            newCard.counter(res);
            newCard.unlike();
        }
        catch(err) {
            console.log(err);
        }
    }

    return newCard.generateCard();
}





// ———— Попап удаления
const popupDeleteCardConfirm = new PopupWithConfirm('.popup_type_delete-card', deleteCard)
popupDeleteCardConfirm.setEventListeners();

async function deleteCard(data) {
    popupDeleteCardConfirm.setButtonChange('Удаление...');
    try {      
        await api.deleteCards(data);
        const card = document.getElementById(data);
        card.remove();
        popupDeleteCardConfirm.close();
    }
    catch(err) {
        console.log(err)
    }
    finally {
        popupDeleteCardConfirm.setButtonChange('Да');
    }    
}

// ———— Попап с картинкой
const popupWithImg = new PopupWithImage('.popup_type_image');
popupWithImg.setEventListeners();  

function handleCardClick(link, name){
    popupWithImg.open(link, name);
}


// ———— Информация о пользователе
const userInfo = new UserInfo({ 
    nameSelector: '.profile__names', 
    jobSelector: '.profile__job',
    avatarSelector: '.profile__avatar'
})


// ———— Попап со сменой UserInfo и Avatar
const popupChangeUserInfo = new PopupWithForm('.popup_type_edit', setNewUserInfo);
const openPopupChangeUserInfo = document.querySelector('.profile__button-edit');
popupChangeUserInfo.setEventListeners();

openPopupChangeUserInfo.addEventListener('click', () => {
    popupChangeUserInfo.open();
    const user = userInfo.getUserInfo();
    popupChangeUserInfo.setInputValues(user);
})

async function setNewUserInfo(data) {
    popupChangeUserInfo.setButtonChange('Сохранение...');
    try {      
        const change = await api.setMyInfo(data); 
        userInfo.setUserInfo(change);
        popupChangeUserInfo.close();
    }
    catch(err) {
        console.log(err)
    }
    finally {
        popupChangeUserInfo.setButtonChange('Сохранить');
    }
}

const popupChangeUserAvatar = new PopupWithForm('.popup_type_change-avatar', setNewUserAvatar);
const openPopupChangeUserAvatar = document.querySelector('.profile__change-avatar');
popupChangeUserAvatar.setEventListeners();

openPopupChangeUserAvatar.addEventListener('click', () => {
    popupChangeUserAvatar.open();
})

async function setNewUserAvatar(data) {
    popupChangeUserAvatar.setButtonChange('Сохранение...');
    try {      
        const change = await api.setMyAvatar(data); 
        userInfo.setUserInfo(change);
        popupChangeUserAvatar.close();
    }
    catch(err) {
        console.log(err)
    }
    finally {
        popupChangeUserAvatar.setButtonChange('Сохранить');
    }
}

// ———— Добавление карточки
const popupAddCard = new PopupWithForm('.popup_type_add', addNewCardToItemList);
const openPopupAddCard = document.querySelector('.profile__button-add');
popupAddCard.setEventListeners();

openPopupAddCard.addEventListener('click', () => {
    popupAddCard.open();
})

async function addNewCardToItemList(data) {
    popupAddCard.setButtonChange('Сохранение...');
    try {      
        const newCardToServer = await api.addCards(data);
        const newCardToItemList = addItem(newCardToServer);
        itemList.prependAddItem(newCardToItemList);
        popupAddCard.close();
    }
    catch(err) {
        console.log(err)
    }
    finally {
        popupAddCard.setButtonChange('Сохранить');
    }   
}


// ———— Получаю все данные с сервера и устанавливаю их
Promise.all([api.getCards(), api.getMyInfo()])
    .then(([allCards, myInfo]) => {
        userId = myInfo._id; 
        itemList.renderItems(allCards);
        userInfo.setUserInfo(myInfo); 
    })
    .catch((err) => {
        console.log(err)
    })



  
