var express = require("express");
var router = express.Router();
const mongojs = require("mongojs");
const db = mongojs(
  "mongodb://kim:kimdim123@ds119732.mlab.com:19732/fullstack",
  ["members"]
);

router.get("/members", function(req, res, next) {
  db.members.find(function(err, members) {
    if (err) {
      res.send(err);
    }
    res.json(members);
  });
});

// Save member

router.post("/member", function(req, res, next) {
  const member = req.body;
  if (!member.nome || !member.sobrenome || !member.participacao) {
    res.status(400);
    res.json({
      error: "Bad Data"
    });
  } else {
    db.members.save(member, function(err, member) {
      if (err) {
        res.send(err);
      }
      res.json(member);
    });
  }
});

module.exports = router;
