const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=fe040a917fb3fc71f6538dc8f6d23ead&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
