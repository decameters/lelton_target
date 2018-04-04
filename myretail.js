use myRetail;

db.createCollection('items');

db.items.insert({
    id : 13860428 ,
    title : "The Big Lebowski" ,
    current_price : {
        value : 13.49,
        currency_code : "USD",
    }
    });