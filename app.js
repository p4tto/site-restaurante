const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const { engine } = require ('express-handlebars');

app.get('/', (req, res)=>{
    res.render('layouts/main')
})

//Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
// Handlebars 
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars') ;

const PORT = 3000
app.listen(PORT, () => {
    console.log("Servidor Rodando Porta " + PORT )
})