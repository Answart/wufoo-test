var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: false }))


// ROUTE FUNCTIONS

//////////////////////////// FORMS ////////////////////////////
//See all of your a user's forms
getForms = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getForms(function(err, forms){
      response.send(forms);
   });
}

//View the fields of a user's form
getForm = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getForm(request.query.formhash, function(err, form){
      response.send(form);
   });
}


//////////////////////////// ENTRIES ////////////////////////////
// View entries from a user's form (values of the fields)
getFormEntries = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getFormEntries(request.query.formhash, function(err, entries){
      response.send(entries);
   });
}

// View entries from a user's report (values of the fields)
getReportEntries = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getReportEntries(request.query.formhash, function(err, report){
      console.log(report)
      response.send(report);
   });
}


//////////////////////////// REPORTS ////////////////////////////
// View all of the reports on a account
getReports = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getReports(function(err, reports){
      response.send(reports);
   });
}

// View a specific report
getReport = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getReport(request.query.reporthash, function(err, report){
      response.send(report);
   });
}


//////////////////////////// FIELDS ////////////////////////////
// View all the reports for a form
getFields = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getFields(request.query.formhash, function(err, fields){
      response.send(fields);
   });
}


//////////////////////////// WIDGETS ////////////////////////////
//See all the widgets a user uses in a report
getWidgets = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getWidgets(function(err, widgets){
      response.send(widgets);
    });
}


//////////////////////////// COMMENTS ////////////////////////////
//Get all the comments for a form
getComments = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getComments(request.query.formhash, function(err, comments){
      response.send(comments);
   });
}

//Get the comment count for a form
getCommentCount = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getCommentCount(request.query.formhash, function(err, count){
      response.send(count);
   });
}


// GET routes
// for forms...
app.get('/api/v1/getForms', getForms);
app.get('/api/v1/getForm', getForm);
app.get('/api/v1/getFormEntries', getFormEntries);
app.get('/api/v1/getFields', getFields);
app.get('/api/v1/getComments', getComments);
app.get('/api/v1/getCommentCount', getCommentCount);

// for reports...
app.get('/api/v1/getReports', getReports);
app.get('/api/v1/getReport', getReport);
app.get('/api/v1/getReportEntries', getReportEntries);
app.get('/api/v1/getWidgets', getWidgets);


// POST routes
// webhooked url that wufoo sends 
app.post('/api/v1/notifications', function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(request.body));
});



var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});