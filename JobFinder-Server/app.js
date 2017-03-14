/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var jobsapi = require('./routes/jobsapi');
var http = require('http');
var path = require('path');
var session = require('client-sessions');

var app = express();

// all environments
app.use(session({

	cookieName: 'session',
	secret: 'cmpe273_test_string',
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000  }));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}
app.get('/', routes.index);
//app.get('/users', user.list);
app.get('/getAllJobs', jobsapi.getAllJobs);
app.post('/applyJob', jobsapi.applyJob);
app.post('/createJob', jobsapi.createJob);
app.get('/getCandidateProfile/:userid', jobsapi.getCandidateProfile);
app.put('/updateJobSeekerProfile', jobsapi.updateJobSeekerProfile);
app.put('/updateRecruiterProfile', jobsapi.updateRecruiterProfile);
app.post('/searchJobs', jobsapi.searchJobs);

app.get('/getDegree', jobsapi.getDegree);
app.get('/getUserType', jobsapi.getUserType);
app.get('/getCompany', jobsapi.getCompany);
app.get('/getJobCategory', jobsapi.getJobCategory);
app.get('/getWorkUnit', jobsapi.getWorkUnit);

app.get('/authenticate/:email/:password', jobsapi.authenticate);
app.post('/signup/:role',jobsapi.signup);
app.get('/getProfile/:UserId',jobsapi.getProfile);
app.get('/getPostedJobs/:UserId',jobsapi.getPostedJobs);
app.get('/getCandidates/:id',jobsapi.getCandidates);
app.get('/getJobByID/:id',jobsapi.getJobByID);
app.del('/deleteJobPost/:jobid',jobsapi.deleteJobPost);
app.get('/appliedJobs/:UserId',jobsapi.appliedJobs);
app.get('/getRecruiterProfile/:userid', jobsapi.getRecruiterProfile);



http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});





/** OLD FILE
 * Module dependencies.


var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var jobsapi = require('./routes/jobsapi');
var http = require('http');
var path = require('path');
var session = require('client-sessions');

var app = express();

// all environments
app.use(session({   
	  
	cookieName: 'session',
	secret: 'cmpe273_test_string',    
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000  }));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
//app.get('/users', user.list);
app.get('/getAllJobs', jobsapi.getAllJobs);
app.post('/applyJob', jobsapi.applyJob);
app.post('/createJob', jobsapi.createJob);
app.get('/getCandidateProfile/:userid', jobsapi.getCandidateProfile);
app.put('/updateJobSeekerProfile', jobsapi.updateJobSeekerProfile);
app.put('/updateRecruiterProfile', jobsapi.updateRecruiterProfile);
app.post('/searchJobs', jobsapi.searchJobs);

app.get('/getDegree', jobsapi.getDegree);
app.get('/getUserType', jobsapi.getUserType);
app.get('/getCompany', jobsapi.getCompany);
app.get('/getJobCategory', jobsapi.getJobCategory);
app.get('/getWorkUnit', jobsapi.getWorkUnit);

app.get('/authenticate/:email/:password', jobsapi.authenticate);
app.post('/signup/:role',jobsapi.signup);
app.get('/getProfile',jobsapi.getProfile);
app.get('/getPostedJobs',jobsapi.getPostedJobs);
app.get('/getCandidates/:id',jobsapi.getCandidates);
app.get('/getJobByID/:id',jobsapi.getJobByID);
app.del('/deleteJobPost/:jobid',jobsapi.deleteJobPost);
app.get('/appliedJobs',jobsapi.appliedJobs);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

 **/