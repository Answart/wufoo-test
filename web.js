// // web.js
// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();

// app.use(logfmt.requestLogger());

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

   var Wufoo = require("wufoo");
   var wufoo = new Wufoo("answart", "2BJ3-IKC6-LSJU-227P");

   wufoo.getForms(function(err, forms) {
      // do something with your forms here.
      console.log(forms);
   });

   // get a specific form given the id.
   wufoo.getForm("idofForm", function(err, form){
      // do something with your form here.
      
   });

   wufoo.getFormEntries("idofForm", function(err, entries) {
      // do something with your entries here.
      console.log(entries)
   });


wufoo.getForm("q2260j51chrkf6");