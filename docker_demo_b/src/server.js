const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my application");
});

app.listen(3000, function() {
    console.log("application listening on port 3000");
});