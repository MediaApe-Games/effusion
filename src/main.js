"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.get("/", function (req, res) { return res.send("Hello from server!"); });
