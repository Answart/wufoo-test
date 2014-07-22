var express = require('express');
var app = express();
var logfmt = require('logfmt');
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
// parse application/x-www-form-urlencoded
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

//////////////////////////// WEBHOOKS ////////////////////////////
// Add a Webhook for a form
// addWebhook = function(request, response) {
//    var Wufoo = require("wufoo");
//    var wufoo = new Wufoo(request.query.username, request.query.apikey);

//    wufoo.webhook()
// }
//    wufoo.webhook().add("formid", "http://localhost:3000", function(err, hashid) {
//      // store the webhook hashid somewhere in case we want to delete them later.
//    })

//    // pass in optional options
//    var options = {url: "http://abc.com/webhook", handshakeKey: "hand-shaking", metadata: true}
//    wufoo.webhook().add("formid", options, function(err, hashid) {
//      // store the webhook hashid somewhere in case we want to delete them later.
//      db.put("WebHooks", {formid:form.hash, key:hashid});
//    })

// Delete the WebHook. More info:
//    wufoo.webhook().delete("formid", "webhookHashId", function(err, success) {
//      if (!success) {
//        // do something.
//      }
//    })

//// Utility method to make API calls to Wufoo.
// https://answart.wuffo.com/api/v3
uriRequest = function(request, response) {
   var Wufoo = require("wufoo");
   var username = request.query.username;
   var wufoo = new Wufoo(username, request.query.apikey);
   var form_name = request.query.form_name;
   var field = request.query.field;
   var desired_uri = "http://"+username+".wufoo.com/forms/"+form_name+"/def/field15="+field
   // "https://answart.wufoo.com/api/v3/entries/cool-form.json?Filter15=EntryId+Is_equal_to+Cloudy"
   // "https://answart.wufoo.com/api/v3/users.json"


   wufoo.request("get", desired_uri , function(err, requesti){
      response.send(requesti);
      console.log("+++++++++")
      console.log(requesti)
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

// utility route to make API calls to Wufoo
app.get('/api/v1/uriRequest', uriRequest);


// POST routes
// webhooked url that wufoo sends 
app.post('/api/v1/notifications', function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(request.body));
});

app.post('/api/v1/grabfield', function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(request.body));
});

// https://{subdomain}.wufoo.com/api/v3/forms/{formIdentifier}/fields/matches.{xml|json}
// https://answart.wufoo.com/api/v3/forms/q2260j51chrkf6/fields/matches.json


    // console.log("+++++++++++++++++")
    // console.log(JSON.stringify(request.body['Field16']));
    // console.log("- - - - - - - - - - -")
    // console.log('request.body.Field16', request.body['Field16']);
    // console.log("====================")

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});