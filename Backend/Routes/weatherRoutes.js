const express = require('express');

const router = express.Router();

router.post('/:location', async (req, res) => {
  const {location} = req.params 

  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`

  try {
    const response = await fetch(url)

    console.log(response, "response")
    res.send(JSON.stringify(response.data))

  } catch(e) {
    console.error("Error", e.message)
    res.status(500).send("Error fetching weather",e.message)
  }
});

module.exports = router;