const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Connects backend server to mongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "index.html"))
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});