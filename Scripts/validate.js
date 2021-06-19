const formElement = document.querySelector(".popup__container");
const formInput = document.querySelector(".popup__input");
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (element, errorMessages) => {
  element.classList.add("popup__input_error");
  formError.classList.add("popup__input_error-active");
  formError.textContent = errorMessage;
};

const hideInputError = (element) => {
  element.classList.remove("popup__input_error");
  formError.classList.remove("popup__input_error-active");
  formError.textContent = ''
};

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};
 
formElement.addEventListener('submit', function (evt) {

  evt.preventDefault();
});

formInput.addEventListener('input', isValid); 
