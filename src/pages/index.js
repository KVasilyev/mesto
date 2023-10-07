import '../pages/index.css';

import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import { initialCards, setupObject } from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import Api from '../components/Api.js';

const editFormClass = new FormValidator(setupObject, '#edit-profile');
const addFormClass = new FormValidator(setupObject, '#add-content');
editFormClass.enableValidation();
addFormClass.enableValidation();

// API 
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-77',
    headers: {
      authorization: '9204a9cc-6a48-46ae-b1bd-54502917751b',
      'Content-Type': 'application/json'
    }
});

const getMyInfo = await api.getMyInfo(); // получаем информацию обо мне
const getCardFromServet = await api.getCards(); // получаем все карточки



// Подтверждение удаления

const popupDeleteCard = new PopupWithForm('.popup_type_delete-card', deleteCard);
popupDeleteCard.setEventListeners();
const deleteInput = document.querySelector('.input_type_deleteid');

function deleteCard(id) {  
    api.deleteCards(id.cardId);
    document.getElementById(id.cardId).remove();
}


// Добавлнения секции с карточками
const cardSection = '.elements__grid';
const popupWithImg = new PopupWithImage('.popup_type_image');
popupWithImg.setEventListeners();  

function addItem(item) {
    const newCard = new Card(item, getMyInfo, '#card-template', { 
        handleCardClick: (link, name) => {                     
            popupWithImg.open(link, name); 
        }},{
        handleDeletePopup: (id) => {                     
            popupDeleteCard.open(id); 
            deleteInput.value = id;
        }}, likeState
    );
    return newCard.generateCard();
}

const itemList = new Section({
    items: getCardFromServet,
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

userInfo.setUserInfo(getMyInfo);

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#about');

function changeProfileData(data) {
    userInfo.setUserInfo(data);
    api.setMyInfo(data)
}

openPopupChangeProfileData.addEventListener('click', () => { 
    const {name, about} = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = about;
    popupChangeProfileData.open();
   
});


// Добавление карточки
const popupAddNewCard = new PopupWithForm('.popup_type_add', addNewCard);
popupAddNewCard.setEventListeners();
const openPopupAddNewCard = document.querySelector('.profile__button-add');

openPopupAddNewCard.addEventListener('click', () => {
    popupAddNewCard.open();


});

async function addNewCard(data) {
    const {name, link, _id, owner, likes} = await api.addCards(data);
    const newCard = addItem({name, link, _id, owner, likes});
    itemList.prependAddItem(newCard);
}


// Смена аватара

const popupChangeAvatar = new PopupWithForm('.popup_type_change-avatar', changeAvatar);
popupChangeAvatar.setEventListeners();

const openPopupChangeAvatar = document.querySelector('.profile__change-avatar');

const currentAvatar = document.querySelector('.profile__avatar');
currentAvatar.src = getMyInfo.avatar;

openPopupChangeAvatar.addEventListener('click', () => {
    popupChangeAvatar.open();
})

function changeAvatar({avatar}) {
    currentAvatar.src = avatar;
    api.setMyAvatar(avatar);
}

// Смена состояний лайков

function likeState(id) {
    api.getCards()
    .then((res) => {
        return res.find(element => element._id === id);
    })
    .then((res) => {
        return res.likes
    })
    .then((res) => {
        if(res.find(element => getMyInfo)) {
            api.unsetLike(id);
            document.getElementById(id).querySelector('.elements__like').textContent = res.length - 1;
        } else {
            api.setLike(id);
            document.getElementById(id).querySelector('.elements__like').textContent = res.length + 1;
        }
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
}