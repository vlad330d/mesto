let popup = document.querySelector (".popup");
let popupOpen = document.querySelector (".edit-button");
let popupClose = document.querySelector (".popup__close-button")

popupOpen.addEventListener ("click", toggleClass);
popupClose.addEventListener ("click", toggleClass);

 function toggleClass (){
    popup.classList.toggle ("popup_opened")
 }