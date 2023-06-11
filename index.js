const path = require('path')
const express = require('express');
const dotenv = require('dotenv')
dotenv.config({path: './config/.env'})
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/apiRoute')
const pageRoutes = require('./routes/pagesRoutes')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cookieParser())

// set the view engine to ejs
app.set('view engine', 'ejs');

// use route 
app.use('/', apiRoutes)
app.use('/', pageRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})