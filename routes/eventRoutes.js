const express = require("express");
const router = express.Router();
const eventsData = require("../data/events.json");

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

router.get("/:eventId");

module.exports = router;
