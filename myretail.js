use myRetail;

db.createCollection('products');

db.products.insert({
    id : 13860428 ,
    title : "TRON" ,
    current_price : {
        value : 13.49 ,
        currency_code : "USD" ,
    }
});

db.products.insert({
    id : 15117729 ,
    title : "Hearts of the West" ,
    current_price : {
        value : 10.49 ,
        currency_code : "USD" ,
    }
});

db.products.insert({
    id : 16483589 ,
    title : "The Last Unicorn" ,
    current_price : {
        value : 13.49 ,
        currency_code : "USD" ,
    }
});

db.products.insert({
    id : 16696652 ,
    title : "The Fabulous Baker Boys" ,
    current_price : {
        value : 11.49 ,
        currency_code : "USD" ,
    }
});

db.products.insert({
    id : 16752456 ,
    title : "White Squall" ,
    current_price : {
        value : 10.49 ,
        currency_code : "USD" ,
    }
});

db.products.insert({
    id : 15643793 ,
    title : "Seabiscuit" ,
    current_price : {
        value : 13.49 ,
        currency_code : "USD" ,
    }
});