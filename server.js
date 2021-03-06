const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/NewsApp"));

app.get("/*", res => {
    res.sendFile(path.join(__dirname, '/dist/NewsApp/index.html'));
});

app.listen(process.env.PORT || 5000);
console.log("app is listening on ", process.env.PORT || 5000, " port");