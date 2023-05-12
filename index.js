import express from "express";
import router from "./routes/route.js";

const app = express();
const port = 4000;

const API_KEY = "6f82jmw91w19jww018";

const checkApiKey = (req, res, next) => {
  const apiKey = req.query.api_key;
  if (apiKey && apiKey === API_KEY) {
    next();
  } else {
    res.status(401).send("invalid api key");
  }
};

app.use(express.json());

app.use(checkApiKey);

app.use(router);

app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
