import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callback) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputsList = this._form.querySelectorAll('.popup__input');
    }
    _getInputValues() {
        const inputsValues = {};
        this._inputsList.forEach((element) => {
            inputsValues[element.id] = element.value;
        });
        return inputsValues;
    }
    setEventListeners() {
        super.setEventListeners();
        if (!this._isEventListener) {
            this._form.addEventListener('submit', (event) => {
                event.preventDefault(); 
                const data = this._getInputValues();            
                this._callback(data);
                this.close(); 
                this._isEventListener = true;
            });
        };
    }
    close() {
        this._form.reset();
        super.close();
    }
}