const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes/routes');
var port = 3000;
routes(app);

app.listen(port, () => {
    console.log(`Server started on port `+ port);
});