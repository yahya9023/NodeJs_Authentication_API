const { urlencoded } = require("express");
const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const authRoute = require("./routes/users");
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());
app.use(urlencoded({extended:true}))

// mongoose.connect(process.env.DB_CONNECT);

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
});
mongoose.connection.on("error", err => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.use('/users', authRoute);
app.use('/api', authRoute);

app.listen(PORT, () => console.log(`Server running in port PORT : ${PORT}`));