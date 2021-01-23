const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Peace be upon you",
    sender: "George",
    added: new Date()
  },
  {
    text: "Assalamualaikum",
    sender: "Muhammad",
    added: new Date()
  },
  {
    text: "Greetings",
    sender: "Joe",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mini Message Board', messages});
});

router.post('/new', function(req, res) {
  const {text, sender} = req.body;

  messages.push({text, sender, added: new Date()});

  res.redirect('/');
});

module.exports = router;
