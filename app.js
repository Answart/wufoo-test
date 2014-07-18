var express = require('express');
var app = express();

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

//View a entries from a user's form (values of the fields)
getFormEntries = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getFormEntries(request.query.formhash, function(err, entries){
      response.send(entries);
   });
}


// ROUTES
app.get('/api/v1/getForms', getForms);
app.get('/api/v1/getForm', getForm);
app.get('/api/v1/getFormEntries', getFormEntries);

// SERVER
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// http://localhost:3000/api/v1/getForm?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6
