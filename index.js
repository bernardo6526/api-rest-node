const express = require('express')
const app = express()
require('dotenv').config();

const sequelize = require('./config/database');
const jobsRoutes = require('./routes/jobs');

app.use(express.json()); // parses JSON bodies
app.use('/api/jobs',jobsRoutes) // Register Routes

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
  });
});