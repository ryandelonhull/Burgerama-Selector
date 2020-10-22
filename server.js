const express = require("express");
const mysql = require("mysql");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));