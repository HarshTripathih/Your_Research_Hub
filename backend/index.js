const app = require("express")();
const http = require("http").Server(app);
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://harshtripathih321:1Ha2Rs3H%40123@yourresearchhub.trivshi.mongodb.net/");

const user = require('./models/userModel');

async function insert() {
    await user.create({
        name: "Harsh",
        email: "harshtripathih321@gmail.com"
    });
}
insert();

http.listen(3001, function () {
    console.log('server is running at port 3001')
});