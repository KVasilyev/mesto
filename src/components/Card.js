export default class Card {
    constructor({ name, link, _id, owner, likes=[] }, getMyInfo, templateSelector, { handleCardClick }, { handleDeletePopup }, likeState) {
        this._name = name;
        this._link = link; 
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeletePopup = handleDeletePopup;
        this.__id = _id;
        this._owner = owner;
        this._getMyInfo = getMyInfo;
        this._likes = likes;
        this._likeState = likeState;
    }

    _getTemplate() {
        const card = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__element')
        .cloneNode(true); 
        return card;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.id = this.__id;
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__name').textContent = this._name;
        this._element.querySelector('.elements__like').textContent = this._likes.length;
        return this._element;
    }
    
    createCard() {
        this._element = this.generateCard();
        return this._element;
    }
    _handleOpenPopup() {
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);          
        });
    }

    _handleDeleteCard() {
        if (this._owner._id === this._getMyInfo._id){
            this._element.querySelector('.elements__button-delete').addEventListener('click', () => {
                this._handleDeletePopup(this.__id, this._element);
            })
        } else {
            this._element.querySelector('.elements__button-delete').remove();
        }
        
    }

    _handleLikeListener() {     
        if(this._likes.some(res => this._getMyInfo)){
            this._element.querySelector('.elements__button-like').classList.add('elements__button-like_active');            
        }
        this._element.querySelector('.elements__button-like').addEventListener('click', (event) => {
            event.target.classList.toggle('elements__button-like_active'); 
            this._likeState(this.__id);
        });
    }
    
    _setEventListeners() {
        this._handleOpenPopup();
        this._handleLikeListener();
        this._handleDeleteCard();
    }
}


