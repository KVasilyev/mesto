export default class Card {
    constructor(data, userId, templateSelector, handleCardClick, openDeletePopup, setLike, unsetLike) {
        this._name = data.name;
        this._link = data.link; 
        this._likes = data.likes;
        this._owner = data.owner;        
        this.__id = data._id;
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;  
        this._userId = userId;      
        this._openDeletePopup = openDeletePopup;
        this._setLike = setLike;
        this._unsetLike = unsetLike;
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
        this._cardImage = this._element.querySelector('.elements__image');
        this._likeCounter = this._element.querySelector('.elements__like');
        this._likeButton = this._element.querySelector('.elements__button-like');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.id = this.__id;
        this._element.querySelector('.elements__name').textContent = this._name;
        this._likeCounter.textContent = this._likes.length;
        this._setEventListeners();
        this._cardOwner();
        this._likeOnCard();
        this.handleWithLikeButton();
        
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
    _cardOwner() {
        if(this._owner._id !== this._userId) {
            this._element.querySelector('.elements__button-delete').remove();
        }
    }
    _likeOnCard() {
        if(this._likes.find(like => like._id === this._userId)) {
            this.like();
        }
    }
    handleWithLikeButton() {
        this._likeButton.addEventListener('click', () => {
            if(this._likeButton.classList.contains('elements__button-like_active')){
                this.unlike();
                this._unsetLike(this._data);
            } else {
                this.like();
                this._setLike(this._data);
            }
        })
    }
    like() {
        this._likeButton.classList.add('elements__button-like_active');
    }
    unlike() {
        this._likeButton.classList.remove('elements__button-like_active');
    }

    _handleDeleteCard(){
        this._element.querySelector('.elements__button-delete').addEventListener('click', () => {
                this._openDeletePopup(this.__id, this._element);
            })
    }   
    _setEventListeners() {
        this._handleOpenPopup();
        this._handleDeleteCard();
    }
    counter(res) {
        this._likeCounter.textContent = `${res.likes.length}`
    }
}


