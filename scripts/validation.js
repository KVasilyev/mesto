export class FormValidator {
    constructor(setup, formElement) {
        this._setup = setup; 
        this._formElement = document.querySelector(formElement);
        
        this._formSector = setup.formSector;
        this._inputSelector = setup.inputSelector;
        this._inactiveButtonClass = setup.inactiveButtonClass;
        this._inputErrorClass = setup.inputErrorClass;
        this._errorClass = setup.errorClass;
        
        this._inputList = Array.from(this._formElement.querySelectorAll(setup.inputSelector));
        this._submitButton = this._formElement.querySelector(setup.submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid == false) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    
    _hasInvalidInput () {
        return this._inputList.some((inputElement)=> {
            return !inputElement.validity.valid;
        });
    }

    _disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }
    _enableSubmitButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    }


    _toggleButtonState () {
        if(this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    }

    _setEventListener(){
        this._inputList.forEach(input => {
            this._formElement.addEventListener('input',() => {
                this._checkInputValidity(input);
                this._toggleButtonState();                              
            });
            this._toggleButtonState();
        });
                
        this._formElement.addEventListener('reset', () => {
            this._disableSubmitButton();
        }); 
    }

    enableValidation(){
        const formList = Array.from(document.querySelectorAll(this._formSector));
            formList.forEach((formElement) => {
                formElement.addEventListener('submit', (evt) =>{
                evt.preventDefault()
            });
        });
        this._setEventListener();
    }
} 