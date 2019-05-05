const express = require("express"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser');

const app = express();


app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());








const PORT = 8500;

app.use((req, res) => {
  res.status(404).json({ error: "Route Unaivalable" });
});


app.listen(PORT, () => {
  console.info(`The app is listening at port ${PORT}`);
});
