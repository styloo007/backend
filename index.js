// create db connection

let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected successfully')
}, error => {
    console.log('database error:' + error)
})

//server and port
const bookRoute = require("./node-backend/router/book.routes");
const achievementRoute = require("./node-backend/router/achievement.routes");
const publicationRoute = require("./node-backend/router/publication.routes");
const researchRoute = require("./node-backend/router/research.routes");
const contactRoute = require("./node-backend/router/contact.routes");
const timetableRoute = require("./node-backend/router/timetable.routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use(express.static(path.join(__dirname, "dist/Bookstore")));

app.use('/api/book', bookRoute);
app.use('/api/achievement', achievementRoute);
app.use('/api/publication', publicationRoute);
app.use('/api/research', researchRoute);
app.use('/api/contact', contactRoute);
app.use('/api/timetable', timetableRoute);

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log('App is listening at port no:' + port)
})

//404 error handler
app.use((req,res,next) => {
    next(createError(404));
});
//base route
app.get('/',(req,res) => {
    res.send('invalid endpoint');
})
app.get('*',(req,res)=> {
    res.sendFile(path.join(__dirname,'dist/Bookstore/index.html'));
});

app.use(function(err,req,res,next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});