export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
    }

    getUserInfo() {
        const nameAndJob = {
            name: this._nameSelector.textContent,
            job: this._jobSelector.textContent
        }
        return nameAndJob;
        
    }
    setUserInfo(name, job) {
        this._nameSelector.textContent = name;
        this._jobSelector.textContent = job;
    }
}

