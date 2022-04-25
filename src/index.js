const express = require('express');
const { json } = require('express/lib/response');
const mongoose = require("mongoose");
const userRoutes = require("./routes/user")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.log(error));

app.listen(port, () => console.log('server listening on port', port));