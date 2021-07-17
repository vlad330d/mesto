export default class FormValidator {
  constructor(config, formElement){
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.add(this._config.inputErrorClass);
    formError.classList.add(this._config.errorClass);
    formError.textContent = errorMessage;
  };

  _hideInputError = (inputElement) => {
    const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.errorClass);
    formError.textContent = ''
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
  
        this.toggleButtonState();
      });
      this.toggleButtonState()
    });
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
  
      return !inputElement.validity.valid;
    })
  }; 

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", false);
    }
  }; 

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      });
      this._setEventListeners();
  };
}