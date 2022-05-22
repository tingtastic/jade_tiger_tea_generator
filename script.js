const menu = {
    _order: {
        size: ['small','medium','large'],
        temperature: ['hot', 'cold'],
        tea: ['black', 'green', 'herbal', 'white']
    },

    get size() {
        return this._order.size;
    },

    get temperature() {
        return this._order.temperature;
    },

    get tea() {
        return this._order.tea;
    },

    getRandomOptionFromMenu() {
        const option = this._order[orderOptions];
        const randomIndex = Math.floor(Math.randdom()* option.length);
        return option[randomIndex];
    },

    generateRandomOrder() {
        const size = this.getRandomOptionFromMenu('size');
        const temperature = this.getRandomOptionFromMenu('temperature');
        const tea = this.getRandomOptionFromMenu('tea');

        return `Your order is a ${size} ${temperature} ${tea} tea`
    },
};

const cup = menu.generateRandomOrder();
connsole.log(cup);