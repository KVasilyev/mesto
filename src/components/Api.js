export default class Api {
    constructor(options) {  
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    // Получаем информацию обо мне
    async getMyInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then((result) => {
            if (result.ok) {
                return result.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${result.status}`);
            })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
    }  
    // Устанавливаем информацию о себе на сервер
    async setMyInfo({name, about}) {
        fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers
            ,
            body: JSON.stringify({
                name: `${name}`,
                about:`${about}`
            })
        }); 
    }
    // Получаем все карточки с сервера
    async getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then((result) => {
            if (result.ok) {
                return result.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${result.status}`);
            })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
    }
    // Загружаем карточку на сервер
    async addCards({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then((result) => {
            if (result.ok) {
                 return result.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${result.status}`);
            })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
    }
    // Удаление карточки с сервера
    async deleteCards(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
    }
    //Меняем аватар
    async setMyAvatar(avatar) {
        fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers
            ,
            body: JSON.stringify({
                avatar: `${avatar}`,
            })
        }); 
    }
    //Ставим лайк
    async setLike(card) {
        fetch(`${this._baseUrl}/cards/${card}/likes`, {
            method: 'PUT',
            headers: this._headers
        }); 
    }
    //Удаляем лайк
    async unsetLike(card) {
        fetch(`${this._baseUrl}/cards/${card}/likes`, {
            method: 'DELETE',
            headers: this._headers
        }); 
    }  
}