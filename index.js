var express = require('express'),
	cons = require('consolidate'),
	app = express();

// assign the swig engine to .html files
app.engine('dust', cons.dust);

// set .html as the default extension
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


require('./lib/routes')(app);

app.listen(3000);
console.log('Express server listening on port 3000');
