let Grosary = {
    company: 'Grosary company',
    name: 'Chips',
    price: 5,
    quantity: '10 pics',
    item: 4,
    type () {
        console.log("Hello, sir Welcome to " +this.company+ " May I help you ");
    }
}

let types = {
    name1: 'tomato falavour',
    name2: 'normal yellow falavour'
}


Grosary.type();