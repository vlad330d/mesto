let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".user__edit-button");
let popupClose = document.querySelector(".popup__close-button");
let userName = document.querySelector(".user__name");
let profession = document.querySelector(".user__profession");
let formElement = document.querySelector(".popup__container");
let popupInput = document.querySelectorAll(".popup__input");

function popupOpened (){
  popup.classList.add ("popup_opened");
  popupInput[0].value = userName.textContent;
  popupInput[1].value = profession.textContent;
}

function popupClosed (){
  popup.classList.remove ("popup_opened")
}

popupInput[0].setAttribute("value", userName.textContent);
popupInput[1].setAttribute("value", profession.textContent);

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = popupInput[0].value;
  profession.textContent = popupInput[1].value;
  popupClosed();
}

popupOpen.addEventListener("click", popupOpened);
popupClose.addEventListener("click", popupClosed);
formElement.addEventListener('submit', formSubmitHandler);


/*      

      половина ошибок по невнимательности, прошу понять и простить растяпу 💐😇😋 
      p.s это сообщение не попытка задобрить 😂😂

*/