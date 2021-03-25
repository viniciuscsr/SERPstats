const express = require('express');
const app = express();
const PORT = 5000;

const dotenv = require('dotenv');
const morgan = require('morgan');

const searchRoutes = require('./routes/searchRoutes');

dotenv.config();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('server is working');
});

app.use('/api/search', searchRoutes);

app.listen(PORT, console.log('Server is running'));
