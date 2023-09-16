import * as utils from './utils.js';

export class Card {
    constructor(name, link, templateSelector){
        this._name = name;
        this._link = link; 
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const hCard = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__element')
        .cloneNode(true);
        
        return hCard;
        }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__name').textContent = this._name;   

        return this._element;
        }

    _handleOpenPopup() {
        this._element.querySelector('.elements__image').addEventListener('click', () => {    
            utils.openImagePopup(this._link, this._name)
        });
    }

    _handleDeleteCard() {
        this._element.querySelector('.elements__button-delete').addEventListener('click', () => {
            this._element.remove();
        });
    }

    _handleLikeListener() {
        this._element.querySelector('.elements__button-like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__button-like_active');
        });
    }
    
    _setEventListeners() {
        this._handleOpenPopup();
        this._handleDeleteCard();
        this._handleLikeListener();
    }
}


