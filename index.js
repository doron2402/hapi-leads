var Hapi = require('hapi'),
	APP_PORT = process.env.APP_PORT || 3000,
	APP_OPTIONS = { cors: true};

var server = new Hapi.Server(APP_PORT, APP_OPTIONS);

var hello = {
	handler: function (request, reply) {
		reply({ greeting: 'hello world' });
    }
};

var bye = {
	handler: function (request, reply) {
		reply({ greeting: 'Bye World'});
	}
};

var getPerson = function (request, reply) {

	console.log(request.params);
    var nameParts = request.params.name.split('/');
    reply({ first: nameParts[0], last: nameParts[1] });
};

var getCampign = function (request, reply) {
	var campign = request.params.campign;
	reply({ campign: campign });
};

var showAllCampigns = function (request, reply) {
	console.log('show all campings');
	reply({ all: [{name: 1}, {name: 2}]});
};

server.route([
    { method: 'GET', path: '/hello', config: hello},
    { method: 'GET', path: '/bye', config: bye},
    { method: 'GET', path: '/users/{name*2}', handler: getPerson},
    //Campigns
    { method: 'GET', path: '/campigns/{campign}', handler: getCampign},
    { method: 'GET', path: '/campigns/show/all', handler: showAllCampigns},
    { method: 'POST', path: '/campigns/{campign}', handler: campignSave},
    { method: 'DELETE', path: '/campigns/{campign}', handler: campignDelete},
    //Users
    { method: 'GET', path: '/users/{campign}', handler: getUser },
    { method: 'GET', path: '/users/show/all', handler: showAllUsers },
    { method: 'POST', path: '/users/{user}', handler: userSave },
    { method: 'DELETE', path: '/users/{user}', handler: userDelete },


]);

server.start(function () {
	console.log('Server started at: ' + server.info.uri);
});