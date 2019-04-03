const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { BitlyClient } = require("bitly");
const bitly = new BitlyClient("b11981dbcf30da1f42d805f8d56469bcc4e38f35", {});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let a = init(res);
});

async function init(res) {
  let result;
  try {
    result = await bitly.shorten("https://gyarab.ddns.net/");
  } catch (e) {
    throw e;
  }
  console.log(result);
  res.send(result.url);
}

app.listen(8080, () => {
  console.log("Server běží na portu 8080");
});
