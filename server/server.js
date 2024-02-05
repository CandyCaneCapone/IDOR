const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const connectDB = require("./db/connect")

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/v1/auth/signin", () => {});

app.use(notFound);
app.use(errorHandler);


connectDB()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));