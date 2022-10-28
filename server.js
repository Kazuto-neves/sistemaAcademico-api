const HTTP = require(('http'));
const APP = require('./app');
const PORT = process.env.PORT || 3000;
const SERVER = HTTP.createServer(APP);
SERVER.listen(PORT);

