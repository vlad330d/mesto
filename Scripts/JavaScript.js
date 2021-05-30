let popup = document.querySelector (".popup");
let popupOpen = document.querySelector (".edit-button");
let popupClose = document.querySelector (".popup__close-button");

popupOpen.addEventListener ("click", toggleClass);
popupClose.addEventListener ("click", toggleClass);

 function toggleClass (){
    popup.classList.toggle ("popup_opened")
 }

let userName = document.querySelector (".user__name");
let profession = document.querySelector (".user__profession");

let formElement = document.querySelector (".popup__container");
let nameInput = document.querySelector (".popup__name");
let jobInput = document.querySelector (".popup__profession");

nameInput.setAttribute ("value", userName.textContent);
jobInput.setAttribute ("value", profession.textContent);

function formSubmitHandler (evt) {
   evt.preventDefault();

   userName.textContent = nameInput.value;
   profession.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 