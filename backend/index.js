import express from "express"
import mysql from "mysql"

const express = require("express");
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aleposan2730$anchZ",
    database: "test"
})

app.get("/", (req, res) => {
    res.json("Hello this is the backend");
});

app.listen(8800, () => {
    console.log("Connected to backend!");
});