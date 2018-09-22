"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());
constructor();
{
    this.app = express();
    this.middleware();
    this.routes();
}
middleware();
{
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
}
routes();
{
    this.app.route('/').get(function (req, res) { return res.status(200).json({
        'message': 'Hello world!'
    }); });
}
//export default new App();
