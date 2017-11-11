let express = require("express");
let bodyParser = require('body-parser');

let app = express();


app.use(bodyParser.urlencoded({extended: true}));

let data = require("../data/data");

app.route("/api/data")
    .get((req, res) => {
        console.log('Requested node server');
        res.json(data);
    });

app.listen(9090);
