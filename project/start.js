var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(3000, () => {
console.log("server listining on port 3000")
});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("The Server Has Started!");
// });


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
