import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callback) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputsList = this._form.querySelectorAll('.popup__input');
        this._button = this._form.querySelector('.popup__submit');
    }
    _getInputValues() {
        const inputsValues = {};
        this._inputsList.forEach((element) => {
            inputsValues[element.name] = element.value;
        });
        return inputsValues;
    }
    setEventListeners() {
        super.setEventListeners();
            this._form.addEventListener('submit', (event) => {
                event.preventDefault(); 
                const data = this._getInputValues();            
                this._callback(data);              
            });
    }
    close() {
        this._form.reset();
        super.close();
    }
    setInputValues(data) {
        this._inputsList.forEach((element) => {
            element.value = data[element.name]
        });
    }
}