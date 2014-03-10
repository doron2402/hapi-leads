/*
	Leads
*/
var Controller = require('./controller.js'),
 	Model = require('./model.js'),
 	Leads = {};

Leads.addLead = function (req, res, next){

};

Leads.getLead = function(req, res, next){

};

Leads.prototype.validateLead = (data) {
	console.log(data);
};


exports.Leads = Leads;