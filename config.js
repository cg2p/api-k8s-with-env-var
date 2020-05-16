// config.js
require('dotenv').config(); // this loads the defined variables from .env

const config = {
   // 'dev' or 'test'
  env: process.env.NODE_ENV,
  version: process.env.version,

  port: process.env.SERVICE_PORT || 3000,
  host: process.env.SERVICE_HOST || '0.0.0.0',

  secreturl: process.env.SECRETURL,
  testvar: process.env.TESTVAR, 
  
  // cors
  cors_allow:  '*'
};

 

module.exports = config;