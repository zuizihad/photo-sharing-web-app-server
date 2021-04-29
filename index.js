const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json())
app.use(cors());
//Routes
app.get('/', (req, res) => {
    res.send('working')
})
app.use('/user', require('./routes/userRouter'))
app.use('/user', require('./routes/albumRouter'))

//connect to mongodb
const URI = process.env.DB_URL

mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('db connected')
})
app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})