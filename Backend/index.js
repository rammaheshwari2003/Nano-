const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const meetingRoute = require("./route/meetingRoute");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/create", meetingRoute);



const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
})