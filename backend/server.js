const express = require('express');
const app = express();
const PORT = 5000;

const dotenv = require('dotenv');

const searchRoutes = require('./routes/searchRoutes');

app.get('/', (req, res) => {
  res.send('server is working');
});

app.use('/api/search', searchRoutes);

app.listen(PORT, console.log('Server is running'));
