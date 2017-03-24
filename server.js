







const express = require("express");

const hbs = require("hbs");
const fs = require('fs');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use("/assets", express.static(__dirname+"/public"));

app.use((req, res, next)=>{
    var now = new Date().getFullYear();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile("server.log", log + '\n');
    next();
})

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

app.get('/projects', (req, res)=>{
     res.render("projects", {
        pageTitle: "Projects Page",
        welcomeMsg:"Welcome to Our Projects Page"
    })
})
app.listen(port);