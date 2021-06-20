const popup = document.querySelector(".popup");
const popupEditForm = document.querySelector(".popup_edit")
const popupEditOpen = document.querySelector(".user__edit-button");
const popupEditClose = document.querySelector(".popup__close-button_edit");
const userName = document.querySelector(".user__name");
const profession = document.querySelector(".user__profession");
const editFormElement = document.querySelector(".popup__container_edit");
const popupName = document.querySelector(".popup__input_name");
const popupProfession = document.querySelector(".popup__input_profession");

                                                                            //open and close Function
/* сделал mousedown вместо click на closePopupByOverlayClick потому как заметил такую вещь когда нажимешь в форме чтобы выделить текст 
    и отпускаешь мышь с выделиным текстом за формой то она закрывается хотя этого бы пользователь точно не хотел 🧐🧐  */
function openPopup(popup) {
  popup.addEventListener("mousedown", closePopupByOverlayClick)
  document.addEventListener("keydown", closePopupByEsc)
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.removeEventListener("mousedown", closePopupByOverlayClick)
  document.removeEventListener("keydown", closePopupByEsc)
  popup.classList.remove("popup_opened");
  addFormElement.reset();
}

function closePopupByOverlayClick (evt) {
  if (evt.target === evt.currentTarget){
    closeCurrentPopup()
  }
}

function closePopupByEsc (evt) {
  if (evt.key === "Escape"){
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

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  let newCard = {
    name: addCardName.value,
    link: addCardImg.value,
  }
  createNewCard(newCard);
  closePopup(popupAddForm);
}

popupAddOpen.addEventListener("click", () => openPopup(popupAddForm));
popupAddClose.addEventListener("click", () => closePopup(popupAddForm));
addFormElement.addEventListener("submit", addFormSubmitHandler);

                                                                             //Add Form
                                                                            
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


const cardTemplate = document.querySelector(".card-template").content;
const cards = document.querySelector(".cards");

function renderCard(initialCard){
  const cardElement = cardTemplate.cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__trash-button");
  const likeBtn = cardElement.querySelector(".card__like-button");
  const cardImg = cardElement.querySelector(".card__img");

  cardElement.querySelector(".card__name").textContent = initialCard.name;
  cardElement.querySelector(".card__img").src = initialCard.link;
  cardElement.querySelector(".card__img").alt = initialCard.name;

  likeBtn.addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like-button_active");
  })

  deleteButton.addEventListener("click", function(){
    deleteButton.closest(".card").remove();
  })

  cardImg.addEventListener("click", () => openImgPopup(initialCard.link, initialCard.name));

  return cardElement;
}

function createNewCard(cardElement) {
  cards.prepend(renderCard(cardElement));
} 

function renderCards(){
  initialCards.forEach(createNewCard);
}


renderCards()

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