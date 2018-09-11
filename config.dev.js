var config = {}
config.session = {};
config.cookie = {};
//database 
config.mongodb='mongodb://localhost/mean-cms';

//session
config.session.secret = 'yahweh';

//cookie
config.cookie.domain = 'localhost:3000';

module.exports = config;