export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            about: this._jobSelector.textContent,
            avatar: this._avatarSelector.src,
        };
        
    }
    
    setUserInfo(data) {
        this._nameSelector.textContent = data.name;
        this._jobSelector.textContent = data.about;  
        this._avatarSelector.src = data.avatar;   
    }
}

