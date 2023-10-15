

export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
        
    }
    clear() {
        this._containerSelector.empty();
    }
    addItem(item) {
        this._containerSelector.append(item);
    }
    prependAddItem(item) {
        this._containerSelector.prepend(item);
    }

}