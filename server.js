var express = require('express');
var app = express();

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/instructions.db');

app.use(express.static(__dirname + '/public'));

// ROUTES
app.get('/instructions', function(request, response) {  
    // Les get the GROUPS from db
    db.all('SELECT * FROM groups', function(err,groups) {
        if (err) {
            console.log("an error occured: " + err);
        }
       else {
            response.send(groups);
       }
    });
});

app.get('/getPDF', function(request, response) {  
    // Les get the GROUPS from db
    var param = decodeURIComponent(request.url.slice(8)); 
    //console.log(param);
    db.all('SELECT * FROM variations WHERE variation_name="' + param + '"' , function(err,data) {
        if (err) {
            console.log("an error occured: " + err);
        }
       else {
            response.send(data);
       }
    });
});

app.get('/navBack', function(request, response) {  
    // Les get the GROUPS from db
    db.all('SELECT * FROM groups', function(err,groups) {
        if (err) {
            console.log("an error occured: " + err);
        }
       else {
            response.send(groups);
       }
    });
});

app.get('/categories', function(request, response) {  
    // Les get the GROUPS from db
    // get url from after ? (this will be the param). You must also decodeURIComponent so ASCII -> String
    var param = decodeURIComponent(request.url.slice(12)); 
    //console.log(param);
    db.all('SELECT * FROM categories WHERE group_name="' + param + '"', function(err,categories) {
        if (err) {
            console.log("an error occured: " + err);
        }
       else {
            response.send(categories);
       }
    });
});

app.get('/products', function(request, response) {  
    // Les get the GROUPS from db
    // get url from after ? (this will be the param). You must also decodeURIComponent so ASCII -> String
    var param = decodeURIComponent(request.url.slice(10)); 
    //console.log(param);

    db.all('SELECT * FROM products WHERE category_name="' + param + '"', function(err,products) {
        if (err) {
            console.log("an error occured: " + err);
        }
       else {
            response.send(products);
       }
    });
});

app.get('/variations', function(request, response) {  
    // Les get the GROUPS from db
    // get url from after ? (this will be the param). You must also decodeURIComponent so ASCII -> String
    var param = decodeURIComponent(request.url.slice(12)); 
    //console.log(param);
    db.all('SELECT * FROM variations WHERE product_name="' + param + '"', function(err,variation) {
        if (err) {
            console.log("an error occured: " + err);
        }
       else {
            response.send(variation);
       }
    });
});

app.get('/displayVariation', function(request, response) {  
    // Les get the GROUPS from db
    // get url from after ? (this will be the param). You must also decodeURIComponent so ASCII -> String
    var param = decodeURIComponent(request.url.slice(18)); 

    db.all('SELECT * FROM steps WHERE variation_name="' + param + '"', function(err,info) {
        if (err) { 
            console.log("an error occured: " + err);
        }
       else {
            response.send(info);
       }
    });
});

/**
 * START LISTENING
 */
app.listen(5000, function() {
    console.log("Server is running on port 5000");
});
