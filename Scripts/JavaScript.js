import Card from "./Card.js";


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


const popupEditForm = document.querySelector(".popup_edit")
const popupEditOpen = document.querySelector(".user__edit-button");
const popupEditClose = document.querySelector(".popup__close-button_edit");
const userName = document.querySelector(".user__name");
const profession = document.querySelector(".user__profession");
const editFormElement = document.querySelector(".popup__container_edit");
const popupName = document.querySelector(".popup__input_name");
const popupProfession = document.querySelector(".popup__input_profession");
const esc = "Escape"

                                                                            //open and close Function

function openPopup(popup) {
  popup.addEventListener("mousedown", closePopupByOverlayClick)
  document.addEventListener("keydown", closePopupByEsc)
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.removeEventListener("mousedown", closePopupByOverlayClick)
  document.removeEventListener("keydown", closePopupByEsc)
  popup.classList.remove("popup_opened");
}

function closePopupByOverlayClick (evt) {
  if (evt.target === evt.currentTarget){
    closeCurrentPopup()
  }
}

function closePopupByEsc (evt) {
  if (evt.key === esc){
    closeCurrentPopup();
  }
}

function closeCurrentPopup(){
  const opendPopup = document.querySelector(".popup_opened");
  closePopup(opendPopup)
}

                                                                            //open and close Function

                                                                            //Edit Form

function openEditPopup(){
  popupName.value = userName.textContent; 
  popupProfession.value = profession.textContent;
  openPopup(popupEditForm);
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = popupName.value;
  profession.textContent = popupProfession.value;
  closePopup(popupEditForm);
}

popupEditOpen.addEventListener("click", openEditPopup);
popupEditClose.addEventListener("click", () => closePopup(popupEditForm));
editFormElement.addEventListener("submit", editFormSubmitHandler);

                                                                            //Edit Form

                                                                             //Add Form

const popupAddOpen = document.querySelector(".user__add-button");
const popupAddForm = document.querySelector(".popup_add");
const popupAddClose = document.querySelector(".popup__close-button_add");
const addFormElement = document.querySelector(".popup__container_add");
const addCardName = document.querySelector(".popup__input_card-name")
const addCardImg = document.querySelector(".popup__input_card-link")
const addFormSaveBtn = document.querySelector(".popup__save-button_add-form")

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const createdCard = {
    name: addCardName.value,
    link: addCardImg.value,
  }

  const addCard = new Card(createdCard, ".card-template").generateCard();
  renderCard(addCard);
  
  addFormElement.reset();
  closePopup(popupAddForm);
  disableSubmitButton(addFormSaveBtn)
}

function disableSubmitButton(button) {
  button.classList.add("popup__save-button_inactive");
  button.setAttribute("disabled", "disabled");
}

function addFormReset () {
  closePopup(popupAddForm)
  addFormElement.reset();
}


popupAddOpen.addEventListener("click", () => openPopup(popupAddForm));
popupAddClose.addEventListener("click", () => addFormReset());
addFormElement.addEventListener("submit", addFormSubmitHandler);

                                                                             //Add Form
                                                                            
                                                                              //cards

                                                                              //cards

                                                                              //Full screen img

const popupImg = document.querySelector(".popup_fullscreen-picture");
const img = document.querySelector(".popup__fullscreen-img");
const imgTitle = document.querySelector(".popup__picture-title");
const imgPopupClose = document.querySelector(".popup__close-button_img");

const openImgPopup = (link, title) => {
  img.alt = title;
  img.src = link;
  imgTitle.textContent = title;
  openPopup(popupImg);
}

imgPopupClose.addEventListener("click", () => closePopup(popupImg));

                                                                              //Full screen img



initialCards.forEach((card) => {
  const newcard = new Card(card, ".card-template", openImgPopup).generateCard();
  renderCard(newcard);
});

function renderCard(card){
  document.querySelector(".cards").prepend(card);
}
