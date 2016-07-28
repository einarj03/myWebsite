var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/mydatabase',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://mongodb://einarj:1234@ds029575.mlab.com:29575/mydatabase',
    port: process.env.PORT || 80
  }
}
