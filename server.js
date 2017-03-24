





/*Express Middleware

Middleware can do anything (e.g.):
    1- logging something to the screen
    2- make a changr to the request or the response
    3- to make sure that someone logged in to specify wether he can access specific route(website directory)
    4- to respond to request useg ( app.send() | app.render() )

**to use Middleware, app.use():
    app.use( (req, res, next)=>{} )
    -req & res are the same of app.get() -- no difference
    - next : when the function execution done
        if next() not called, the code next to the Middleware wont be executed
*/


const express = require("express");

const hbs = require("hbs");
const fs = require('fs');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use("/assets", express.static(__dirname+"/public"));

//[**] using a Middleware
app.use((req, res, next)=>{
    var now = new Date().getFullYear();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile("server.log", log + '\n');
    next();
})
/*
app.use( (req, res, next)=>{
    res.render("maintenance");
});//with this, any request to any route will return the maintenance.hbs template because we didnt call next() so the down code wont be executed
*/
hbs.registerPartials(__dirname+"/views/partials");

hbs.registerHelper("getCurrentYear", ()=> {
    return new Date().getFullYear();
});

hbs.registerHelper("capitalizeIt", (text)=>{
    return text.toUpperCase();
});


app.get('/', (req, res)=>{
    
    res.render("home", {
        pageTitle: "Home Page",
        welcomeMsg:"Welcome to Our Website"
    })

});

app.get('/about', (req, res)=>{
    
    res.render("about", {
        pageTitle: "About Page"
    });

})


app.listen(port);