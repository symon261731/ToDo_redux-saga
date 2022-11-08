/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3010;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Started on port ${PORT}`));
