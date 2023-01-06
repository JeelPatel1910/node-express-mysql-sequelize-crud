require("dotenv").config();
const express = require("express");
const TodoRoutes = require("./routes/todoRoutes");
const db = require("./model")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

(async () => {
    await db.sequelize.sync();
})();

//basic route
app.use("/", TodoRoutes);

module.exports = app;