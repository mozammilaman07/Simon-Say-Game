const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(8080, () => {
    console.log("server is listning to port 8080");
});