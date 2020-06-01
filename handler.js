let app = require('./index');
let serverless = require('serverless-http');

module.exports.api = serverless(app);
