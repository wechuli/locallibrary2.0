const express = require("express"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  passport = require("passport"),
  path = require("path"),
  authorRoutes = require("./routes/authorRoutes"),
  bookInstanceRoutes = require("./routes/bookInstanceRoutes"),
  bookRoutes = require("./routes/bookRoutes"),
  genreRoutes = require("./routes/genreRoutes"),
  reviewsRoutes = require("./routes/reviewsRoutes"),
  userRoutes = require("./routes/userRoutes");

const env = require("dotenv").config({
  path: path.join(process.env.PWD, ".env")
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(passport.initialize());

//Connect to Mongo DB
mongoose.Promise = global.Promise; //Make the global promise equal to the mongoose promise

mongoose
  .connect(process.env.MONGO_CONNSTR, {
    useCreateIndex: true,
    useNewUrlParser: true,
    auth: {
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD
    }
  })
  .then(() => console.log("Connection to MongoDB Successful"))
  .catch(err => console.error(err));

//Connecting to Azure's Cosmos DB
// mongoose
//   .connect(
//     process.env.COSMOSDB_CONNSTR + "?ssl=true&replicaSet=globaldb",
//     {
//       useCreateIndex: true,
//       useNewUrlParser: true,
//       auth: {
//         user: process.env.COSMODDB_USER,
//         password: process.env.COSMOSDB_PASSWORD
//       }
//     }
//   )
//   .then(() => console.log("Connection to CosmosDB successful"))
//   .catch(err => console.error(err));

//Routes

app.use("/api/author", authorRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/genre", genreRoutes);
app.use("/api/user", userRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/bookinstance", bookInstanceRoutes);

const PORT = 8500;

app.use((req, res) => {
  res.status(404).json({ error: "Route Unaivalable" });
});

app.listen(PORT, () => {
  console.info(`The app is listening at port ${PORT}`);
});
