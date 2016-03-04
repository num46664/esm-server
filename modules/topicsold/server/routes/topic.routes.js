'use strict';
// =========================================================================
//
// Routes for milestones
//
// =========================================================================
var policy  = require ('../policies/topic.policy');
var VC      = require ('../controllers/vc.controller');
var helpers = require ('../../../core/server/controllers/core.helpers.controller');

module.exports = function (app) {
	helpers.setCRUDRoutes (app, 'valuedcomponent', VC, policy);
	// -------------------------------------------------------------------------
	//
	// routes for getting new sections of the vc
	//
	// -------------------------------------------------------------------------
	app.route ('/api/valuedcomponent/new/boundary').all (policy.isAllowed)
		.get (function (req, res) {
			var vc = new VC (req.user);
			vc.newAssessmentBoundary ().then (helpers.success(res), helpers.failure(res));
		});
	app.route ('/api/valuedcomponent/new/condition').all (policy.isAllowed)
		.get (function (req, res) {
			var vc = new VC (req.user);
			vc.newExistingCondition ().then (helpers.success(res), helpers.failure(res));
		});
	app.route ('/api/valuedcomponent/new/effect').all (policy.isAllowed)
		.get (function (req, res) {
			var vc = new VC (req.user);
			vc.newPotentialEffect ().then (helpers.success(res), helpers.failure(res));
		});
	app.route ('/api/valuedcomponent/new/mitigation').all (policy.isAllowed)
		.get (function (req, res) {
			var vc = new VC (req.user);
			vc.newMitigationMeasure ().then (helpers.success(res), helpers.failure(res));
		});
	app.route ('/api/valuedcomponent/new/cumulative').all (policy.isAllowed)
		.get (function (req, res) {
			var vc = new VC (req.user);
			vc.newCumulativeEffect ().then (helpers.success(res), helpers.failure(res));
		});
	app.route ('/api/valuedcomponent/list/:project').all (policy.isAllowed)
		.get (function (req,res) {
			var vc = new VC (req.user);
			vc.listForProject (req.Project)
			.then (helpers.success(res), helpers.failure(res));
		});
};
