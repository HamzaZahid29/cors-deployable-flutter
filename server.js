const express = require('express');
const path = require('path');
const app = express();

// CORS Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Your existing endpoint
app.get('/images', (req, res) => {
  const images = [
    'http://localhost:3000/assets/image1.jpg',
    'http://localhost:3000/assets/image2.jpg',
    'http://localhost:3000/assets/image3.jpg',
    'http://localhost:3000/assets/image4.jpg',
    'http://localhost:3000/assets/image5.jpg',
  ];
  res.json(images);
});

// Listen on localhost port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
