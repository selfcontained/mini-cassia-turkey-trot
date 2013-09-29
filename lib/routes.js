
module.exports = function(app, config) {

	app.get('/', function(req, res, next){
		res.render('index');
	});

	app.get('/registration', function(req, res, next){
		res.render('registration');
	});

	app.get('/travel', function(req, res, next){
		res.render('travel');
	});

	app.get('/volunteers', function(req, res, next){
		res.render('volunteers');
	});

	app.get('/contact', function(req, res, next){
		res.render('contact');
	});

	app.get('/faq', function(req, res, next){
		res.render('faq');
	});

	app.get('/visit', function(req, res, next){
		res.render('visit');
	});

	app.get('/sponsors', function(req, res, next){
		res.render('sponsors');
	});
};
