const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  const error = new Error('404 Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.status(404).json({
    success: false,
    error: error.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
