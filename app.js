const express = require('express');
const horoscope = require('horoscope');
const app = express();
const port = process.env.PORT || 3000;

app.get('/horoscope', (req, res) => {
  const { birthdate } = req.query;
  
  if (!birthdate) {
    return res.status(400).json({ error: 'Birthdate query parameter is required' });
  }

  const date = new Date(birthdate);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
  }
  res.setHeader('Content-Type', 'application/json');

  try {
    const sign = horoscope.getSign({
      month: date.getMonth() + 1,
      day: date.getDate()
    });
    
    return res.json({ horoscopeSign: sign });
  } catch (error) {
    res.status(500).json({ error: 'Error calculating zodiac sign' });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}


module.exports = app;