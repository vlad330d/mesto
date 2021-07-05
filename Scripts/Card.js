export default class Card {
    constructor(data){
        this._text = data.name;
        this._img = data.link;
    }
    
    _getTemplate(){
        const cardElement = document.querySelector(".card-template").content.querySelector(".card").cloneNode(true);

        return cardElement;
    }
/*
    _deleteCard(){
        this._element.remove();
    }

    _likeCard(evt){
        evt.target.classList.toggle("card__like-button_active");
    }

    generateCard(){
        this._element = this._getTemplate();

        const cardImg = this._element.querySelector(".card__img")
        cardImg.src = this._img;
        cardImg.alt = this._text;
        this._element.querySelector(".card__name").textContent = this._text;

        return this._element
    }
*/

    generateCard() {
        this._element = this._getTemplate();
    
        this._element.querySelector(".card__img").src = this._img;
        this._element.querySelector(".card__name").textContent = this._text;
    
        return this._element;
    } 
}