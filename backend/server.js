const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const error = require('./middleware/errorHandler');
const bodyParser = require('body-parser');
const { PORT, DB } = require('./config/config');
const path = require("path");

//static content
app.use("/uploads", express.static(path.join("backend/uploads")));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


require('./app/media/routesDefinations/mediaRoutesDefs')(app);
require('./app/users/routesDefinations/userRouteDef')(app);
require('./app/post/routesDefinations/postRouteDef')(app);


app.use(error); //this is the error handler for all promise rejections in the server.

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...', err.message);
});

app.listen(PORT, () => {
    console.log(`Server listining on ${PORT}`);
});