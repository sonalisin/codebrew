const express = require('express');
const app = express();
var path = require('path');

const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.use(express.static(path.join(__dirname , '/public')));
app.use(express.static(path.join(__dirname , '/html')));

app.use('/html', router);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,+'html/index.html'));
});

// router.get('/survey', (req, res, next) => {
//     res.sendFile('survey.html', {root: './html'});
// });
//
// router.get('/results', (req, res, next) => {
//     res.sendFile('results.html', {root: './html'});
// });

app.listen(3000, function(){
    console.log('Server started');
});

