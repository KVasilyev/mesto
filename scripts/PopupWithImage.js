import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._img = this._popupSelector.querySelector('.popup__image');
        this._caption = this._popupSelector.querySelector('.popup__image-caption');
    }
    open(link, name) {
        super.open();           
        this._img.src = link;
        this._img.alt = name;
        this._caption.textContent = name;      
    }
}