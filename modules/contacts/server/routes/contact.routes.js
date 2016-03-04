'use strict';
// =========================================================================
//
// Routes for contacts
//
// =========================================================================
var policy  = require ('../policies/contact.policy');
var Contact  = require ('../controllers/contact.controller');
var helpers = require ('../../../core/server/controllers/core.helpers.controller');

module.exports = function (app) {
	helpers.setCRUDRoutes (app, 'contact', Contact, policy);
};

