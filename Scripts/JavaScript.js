                                                                            //Edit Form
let popupEditForm = document.querySelector(".popup_edit");
let popupEditOpen = document.querySelector(".user__edit-button");
let popupEditClose = document.querySelector(".popup__close-button_edit");
let userName = document.querySelector(".user__name");
let profession = document.querySelector(".user__profession");
let editFormElement = document.querySelector(".popup__container_edit");
let popupName = document.querySelector(".popup__input_name");
let popupProfession = document.querySelector(".popup__input_profession");


function popupEditOpenClose (){
  popupEditForm.classList.toggle("popup_opened");
}

function editRefresh (){
  popupName.value = userName.textContent;
  popupProfession.value = profession.textContent;
}

function editFormOpen (){
  popupEditOpenClose();
  editRefresh();
}

popupName.setAttribute("value", userName.textContent);
popupProfession.setAttribute("value", profession.textContent);


function editFormSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = popupName.value;
  profession.textContent = popupProfession.value;
  popupEditOpenClose();
}

popupEditOpen.addEventListener("click", editFormOpen);
popupEditClose.addEventListener("click", popupEditOpenClose);
editFormElement.addEventListener("submit", editFormSubmitHandler);


                                                                             //Add Form


let popupAddOpen = document.querySelector(".user__add-button");
let popupAddForm = document.querySelector(".popup_add");
let popupAddClose = document.querySelector(".popup__close-button_add");
let addFormElement = document.querySelector(".popup__container_add");
let addCardName = document.querySelector(".popup__input_card-name")
let addCardImg = document.querySelector(".popup__input_card-link")

function popupAddOpenClose (){
  popupAddForm.classList.toggle("popup_opened");
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  popupAddOpenClose();
}



popupAddOpen.addEventListener("click", popupAddOpenClose);
popupAddClose.addEventListener("click", popupAddOpenClose);
addFormElement.addEventListener("submit", addFormSubmitHandler);

                                                                              //cards

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
]; 


let cardTemplate = document.querySelector(".card-template").content;
let cards = document.querySelector(".cards");
let deleteButton = cardTemplate.querySelector(".card__trash-button");

function renderCards(){
  initialCards.forEach(renderCard);
}

function renderCard(initialCards){
  let cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__name").textContent = initialCards.name;
  cardElement.querySelector(".card__img").src = initialCards.link;

  cards.appendChild(cardElement);
}

renderCards()