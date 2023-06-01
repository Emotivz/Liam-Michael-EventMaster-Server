const express = require("express");
const router = express.Router();
const eventsData = require("../data/events.json");
const crypto = require("crypto");

//routes

// GET list of events
// This route can be used for home page
router.get("/", (req, res) => {
  const shortEventListData = eventsData.map((event) => {
    return {
      id: event.id,
      title: event.title,
      date: event.date,
      host: event.host,
      image: event.image,
    };
  });
  res.status(200).json(shortEventListData);
});

router.get("/:eventId", (req, res) => {
  const singleEvent = eventsData.find(
    (event) => event.id === req.params.eventId
  );

  res.json(singleEvent);
});

router.post("/", (req, res) => {
  const newEvent = {
    id: crypto.randomUUID(),
    title: req.body.title,
    host: "John Doe",
    date: req.body.date,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    image: "insert image here",
    details: req.body.details,
    attending: 0,
  };

  // add new event to JSON
  eventsData.push(newEvent);

  //send confirmation that its been added
  res.status(201).json(newEvent);
});

module.exports = router;
