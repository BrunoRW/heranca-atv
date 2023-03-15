
// sistema
class Product{
    constructor(name, price){
        this.name = name
        this.price = price;
    }

    priceTag(){
        let x = `
            Produto: ${this.name}\n
            Preço: ${this.price}\n
        `;
        return x;
    }
}

class ImportedProduct extends Product{
    constructor(name, price, fee){
        super(name, price)
        this.customFee = fee;
    }

    priceTag(){
        let x = `
            Produto: ${this.name}\n
            Preço: ${this.price}\n
            taxa: ${this.customFee}\n
            Valor total: ${this.totalPrice()}\n
        `;
        return x;
    }

    totalPrice(){
        let x = this.price + this.customFee;
        return x;
    }
}

class UsedProduct extends Product{
    constructor(name, price, date){
        super(name, price)
        this.manufactureDate = date;
    }

    priceTag(){
        let x = `
            Produto: ${this.name}\n
            Preço: ${this.price}\n
            Data: ${this.manufactureDate}\n
        `;
        return x;
    }
}

const nw = new Product("Notebook", 1100.00);
const used = new UsedProduct("Iphone", 400.00, (new Date()));
const imported = new ImportedProduct("Tablet", 260.00, 20.00);

let getNw = nw.priceTag();
let getUsed = used.priceTag();
let getImported = imported.priceTag();

console.log(getNw);
console.log(getUsed);
console.log(getImported);