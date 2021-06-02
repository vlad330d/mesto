let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".user__edit-button");
let popupClose = document.querySelector(".popup__close-button");
let userName = document.querySelector(".user__name");
let profession = document.querySelector(".user__profession");
let formElement = document.querySelector(".popup__container");
let popupName = document.querySelector(".popup__input_name");
let popupProfession = document.querySelector(".popup__input_profession");


function popupOpened (){
  popup.classList.add ("popup_opened");
  popupName.value = userName.textContent;
  popupProfession.value = profession.textContent;
}

function popupClosed (){
  popup.classList.remove ("popup_opened")
}

popupName.setAttribute("value", userName.textContent);
popupProfession.setAttribute("value", profession.textContent);

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = popupName.value;
  profession.textContent = popupProfession.value;
  popupClosed();
}

popupOpen.addEventListener("click", popupOpened);
popupClose.addEventListener("click", popupClosed);
formElement.addEventListener('submit', formSubmitHandler);
