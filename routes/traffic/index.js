/*
	Traffic
*/
var Controller = require('./controller.js'),
 	Model = require('./model.js'),
 	Traffic = {};

Traffic.addTraffic = function (req, res, next){

};

Traffic.getTraffic = function(req, res, next){

};

Traffic.prototype.validateTraffic = (data) {
	console.log(data);
};


exports.Traffic = Traffic;