const app = require("./app.js");
const express = require("express")
const cors = require("cors");
const PORT = process.env.PORT || 9099;

// listen for request
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});