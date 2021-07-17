import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./initial-сards.js";


const config ={
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error-message_active"
}

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

  newCard(createdCard)
  
  addFormElement.reset();
  closePopup(popupAddForm);
  validCard.toggleButtonState();
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

const cards = document.querySelector(".cards")

function newCard(card) {
  const newcard = new Card(card, ".card-template", openImgPopup).generateCard();
  renderCard(newcard);
}

initialCards.forEach((card) => {
  newCard(card)
});

function renderCard(card){
  cards.prepend(card);
}


const validProfile = new FormValidator(config, popupEditForm);
validProfile.enableValidation();

const validCard = new FormValidator(config, popupAddForm);
validCard.enableValidation(); 