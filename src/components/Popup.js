export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._closeButton = this._popupSelector.querySelector('.popup__button-close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose() {
            if(event.key == 'Escape') {
                this.close();
            }
            
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });   
        
        this._popupSelector.addEventListener('click', (event) => {
            if(event.target === this._popupSelector) {
                this.close();
            }
        });
    }
}



























