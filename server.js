require('dotenv').config()

var groupId = '34946486'
var cookie = process.env.COOKIE

const express = require("express");
const rbx = require("noblox.js");
const app = express();

const PORT = Math.floor(Math.random() * (65535 - 3000 + 1)) + 3000;

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getAuthenticatedUser();
  console.log(currentUser.name);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
    console.log(`Ranked ${User.name}!`)
});

const listener = app.listen(process.env.PORT, '127.0.0.1', () => {
  console.log("Your app is listening on port " + listener.address().port);
});