const model = {
    currentShoe = null;
}
const controller = {
    getShoes() {
        return model.shoes;
    },
    incrementCounter() {
        model.clickCount++;
        shoeView.render();
    },
};
const shoeView = {
    init() {
        this.shoeElem = document.getElementsByClassName('shoe');
        this.shoeImgElem = document.getElementsByClassName('shoe-img');
        this.countElem = document.getElementsByClassName('shoe-count');
        this.shoeImgElem.addEventListener('click', this.clickHandler);
        this.render();
    },
    clickHandler() {
        return controller.incrementCounter();
    },
    render() {
        this.animeImageElem.style.cursor = 'pointer';
    },

    render() {
        let shoe;
        let elem;
        let i;
        const shoes = controller.getShoes();

        this.shoeListElem.innerHTML = '';

        for(let i = 0; i < shoes.length; i++) {
            shoe = shoes[i];

            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = shoe.name;
            elem.addEventListener(
                'click',
                (function() {
                    return function() {
                        shoeView.render();
        },
    },
};
controller.init();