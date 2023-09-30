
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._closeButton = this._popupSelector.querySelector('.popup__button-close');
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
        this._handleEscClose();
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
            if(evt.key == 'Escape') {
                this.close();
            }
        });
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });   
        
        this._popupSelector.addEventListener('click', (evt) => {
            if(evt.target === this._popupSelector) {
                this.close();
            }
        });
    }
}













