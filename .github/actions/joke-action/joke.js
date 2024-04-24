const tiny = require("tiny-json-http");

const options = {
  url: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  }
};

async function getJoke() {
  const res = await tiny.get(options);
  return res.body.joke;
}

module.exports = getJoke;
