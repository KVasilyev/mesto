// Добавляем класс с ошибкой
function showInputError(formElement, inputElement, errorMessage, setup) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(setup.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(setup.errorClass);
}


// Снимаем класс с ошибкой
function hideInputError(formElement, inputElement, setup) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(setup.inputErrorClass);
    errorElement.classList.remove(setup.errorClass);
    errorElement.textContent = '';
}


// Проверяем валидность полей
function checkInputValidity(formElement, inputElement, setup) {
    if (inputElement.validity.valid == false) {
        showInputError(formElement, inputElement, inputElement.validationMessage, setup);
    } else {
        hideInputError(formElement, inputElement, setup);
    }
}


// Добавляем listener полям
function setEventListener(formElement, setup) {
    const inputList = Array.from(formElement.querySelectorAll(setup.inputSelector));
    const buttonElement = formElement.querySelector(setup.submitButtonSelector);
    inputList.forEach (inputElement => {
        inputElement.addEventListener ('input', () => {
            checkInputValidity(formElement, inputElement, setup);
            toggleButtonState(inputList, buttonElement, setup);
        });
        toggleButtonState(inputList, buttonElement, setup);
    });
}
  
function enableValidation (setup) {
    const formList = Array.from(document.querySelectorAll(setup.formSelector));
    formList.forEach ((formElement) => {
        formElement.addEventListener('submit', (evt) =>{
            evt.preventDefault()
        });
    setEventListener(formElement, setup);
    });
}


// Проверяем валидны ли поля
function hasInvalidInput (inputList) {
    return inputList.some((inputElement)=> {
        return !inputElement.validity.valid;
    });
}


// Дизейблим или нет конпку
function toggleButtonState (inputList, buttonElement, setup) {
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(setup.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(setup.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}


// Включаем все
enableValidation( {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_active'
});