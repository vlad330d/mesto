export default class Card {
    constructor(data, cardSelector, imgPopup){
        this._text = data.name;
        this._img = data.link;
        this._imgPopup = imgPopup;
        this._cardSelector = cardSelector;
    }
    
    _getTemplate(){
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);

        return cardElement;
    }

    _deleteCard = () => {
        this._element.remove();
    }

    _likeCard(evt){
        evt.target.classList.toggle("card__like-button_active");
    }

    generateCard() {
        this._element = this._getTemplate();

        const cardImg = this._element.querySelector(".card__img");
    
        cardImg.src = this._img;
        cardImg.alt = this._text;
        this._element.querySelector(".card__name").textContent = this._text;

        this._element.querySelector(".card__trash-button").addEventListener('click', this._deleteCard);
        this._element.querySelector('.card__like-button').addEventListener('click', this._likeCard);

        cardImg.addEventListener("click", () => this._imgPopup(this._img, this._text));
    
        return this._element;
    } 
}