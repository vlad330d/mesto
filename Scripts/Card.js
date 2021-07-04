export default class Card {
    constructor(data, cardSelector){
        this._text = data.text;
        this._img = data.img;
        this._cardSelector = cardSelector;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._cardSelector).content.querySelector("card__img").cloneNode(true);

        return cardElement;
    }

    _deleteCard(){
        this._element.remove();
    }

    _likeCard(evt){
        evt.target.classList.toggle("card__like-button_active");
    }

    renderCard(){
        this._element = this._getTemplate();

        const cardImg = this._element.querySelector(".card__img")
        cardImg.src = this._img;
        cardImg.alt = this._text;
        this._element.querySelector(".card__name").textContent = this._text;

        return this._element
    }

}