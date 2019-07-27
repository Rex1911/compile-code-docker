const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const compiler = require('compile-code')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
compiler.init();

//======================
//     ROUTES
//======================
app.get("/", (req,res) => {
    res.render("index");
})

app.post("/compile", (req,res) => {
    let {code,source,input} = req.body
    compiler.compile(parseInt(code), source, input, (data) => {
        res.send(data);
    })
});

//=======================
// STARTING THE SERVER
//=======================
let server = app.listen(3000, function(){
    console.log('listening on *:3000');
  });