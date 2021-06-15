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
  renderCard(newCard);
  popupAddOpenClose();
}

let newCard = [
  {
  name: addCardName.textContent,
  link: addCardImg.textContent
}
]


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

function renderCards(){
  initialCards.forEach(renderCard);
}

function renderCard(initialCards){
  let cardElement = cardTemplate.cloneNode(true);
  let deleteButton = cardElement.querySelector(".card__trash-button");
  let likeBtn = cardElement.querySelector(".card__like-button");
  let cardImg = cardElement.querySelector(".card__img");

  cardElement.querySelector(".card__name").textContent = initialCards.name;
  cardElement.querySelector(".card__img").src = initialCards.link;
  cardElement.querySelector(".card__img").alt = initialCards.name;

  likeBtn.addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like-button_active");
  })

  deleteButton.addEventListener("click", function(){
    deleteButton.closest(".card").remove();
  })

  cardImg.addEventListener("click", popupImgOpenClose)

  cards.appendChild(cardElement);
}

renderCards()

                                                              //Full screen img

let popupImg = document.querySelector(".popup_fullscreen-picture");
let img = document.querySelector(".popup__fullscreen-img");
let imgTitle = document.querySelector(".popup__picture-title");
let imgPopupClose = document.querySelector(".popup__close-button_img");


function popupImgOpenClose(evt){
  popupImg.classList.toggle("popup_opened");
  img.alt = evt.target.closest(".card__img").alt;
  img.src = evt.target.closest(".card__img").src;
  imgTitle.textContent = evt.target.closest(".card__img").alt;
}

imgPopupClose.addEventListener("click", popupImgOpenClose);
