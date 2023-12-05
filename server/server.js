const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const db_url = 'mongodb://localhost:27017/mydb';
const port = 5200;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require("./routes/user-routes.js"));
app.use('/api', require("./routes/user-routes.js"));

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);

  // Connecting to MongoDB
  mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connection to database established');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
    });
});
