const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB);
const app = require("./src/app");

app.listen(3000);
