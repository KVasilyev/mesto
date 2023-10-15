import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, callback) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._button = this._form.querySelector('.popup__submit');
    }
    open(data) {
        super.open();
        this._data = data;
    }
    setEventListeners() {
        super.setEventListeners();
            this._form.addEventListener('submit', (event) => {
                event.preventDefault();      
                this._callback(this._data);              
            });
    }
    
}