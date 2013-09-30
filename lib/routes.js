
module.exports = function(app, config) {

	app.get('/', function(req, res, next){
		res.render('index');
	});

	app.get('/registration.html', function(req, res, next){
		res.render('registration');
	});

	app.get('/travel.html', function(req, res, next){
		res.render('travel');
	});

	app.get('/volunteers.html', function(req, res, next){
		res.render('volunteers');
	});

	app.get('/contact.html', function(req, res, next){
		res.render('contact');
	});

	app.get('/faq.html', function(req, res, next){
		res.render('faq');
	});

	app.get('/visit.html', function(req, res, next){
		res.render('visit');
	});

	app.get('/sponsors.html', function(req, res, next){
		res.render('sponsors');
	});
};
