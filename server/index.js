const express = require("express");
const app = express();
const Tesseract = require("tesseract.js");
const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const fetch = require("node-fetch");
const adapter = new FileSync("db.json");
const db = low(adapter);

function helper(val) {
  if (val !== "©" && val !== "" && val !== "‘") {
    return val;
  }
}

app.get("/", function(req, res) {
  Tesseract.recognize(
    "https://sunnymoney.weebly.com/uploads/1/9/6/4/19645963/veggie-grocery-receipt_orig.jpeg",
    // 'https://fizzleblog.files.wordpress.com/2010/12/grocery-receipt-2.jpg?w=1100',
    "eng",
    { logger: m => console.log(m) }
  )
    .then(({ data: { text } }) => {
      let hardCoded = [
        "SRRUCHINNT",
        "BANANA",
        "POTATOES",
        "BROCCOLT",
        "TONATOES",
        "LETTUCE",
        "GRAPES",
        "PEAS",
        "SPROUTS"
      ];
      let fixMisMatch = { SRRUCHINNT: "ZUCHINNI", BROCCOLT: "BROCCOLI" };
      let reg = /([0-9]+|[\.]+|[\n]|[$]|[@]|\\|\/|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]|[a-z])/g;
      let to_modify = text.split().map(val =>
        val
          .replace(reg, "")
          .split(" ")
          .filter(helper)
      );
      console.log(to_modify[0]);

      let cleaned = [];
      let to_return = {};
      for (let el of to_modify[0]) {
        if (hardCoded.includes(el) && el != undefined) {
          if (fixMisMatch.hasOwnProperty(el)) {
            cleaned.push(fixMisMatch[el]);
          } else {
            cleaned.push(el);
          }
        }
      }

      for (const el of cleaned) {
        let valueDB = db
          .get("groceries")
          .find({ id: el })
          .value();
        to_return[el] = valueDB;
      }
      res.json(to_return);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/recomendations", async function(req, res) {
  fetch("https://www.supercook.com/dyn/results", {
    credentials: "include",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,fr;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    referrer: "https://www.supercook.com/",
    referrerPolicy: "no-referrer-when-downgrade",
    body: "needsimage=1&kitchen=banana&exclude=&start=0",
    method: "POST",
    mode: "cors"
  })
    .then(res => res.json()) // expecting a json response
    .then(json => {
      let stocker = [];
      for (const key in json.results) {
        if (key < 4) {
          if (json.results.hasOwnProperty(key)) {
            const element = json.results[key];
            stocker.push(element);
          }
        }
      }
      res.json(stocker);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

