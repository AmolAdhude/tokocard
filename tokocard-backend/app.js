const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const review = require("./review.json");

const app = express();
app.use(cors());

app.get("/data", (request, response) => {
  response.send(data);
});

app.get("/review", (request, response) => {
  response.send(review);
});

//Setting up the Ports and starting the app
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, function () {
  console.log(`--App listening on port ${port}`);
});
