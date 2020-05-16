const config = require('../config');

//ping
exports.ping = function (request, response) {
  response.json({outputText: 'ping!\n'});
  console.log("/ ping fired");
};

//echo
exports.envvars = function (request, response) {
  var secreturl = config.secreturl;
  var testvar = config.testvar;

  console.log("secreturl %s", secreturl);
  console.log("testvar %s", testvar);
    
  response.json({
    secreturl: secreturl,
    testvar: testvar 
  });

  console.log("/envar fired");
};

