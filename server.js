const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//panggil routes
var routes = require('./routes/routes');
var port = 3000;
routes(app);

//daftar menu routes dari index
app.use('/auth',require('./middleware'));

app.listen(port, () => {
    console.log(`Server started on port `+ port);
});