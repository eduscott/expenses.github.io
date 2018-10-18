var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}

//js
handle['../codes/default.js'] = requestHandlers.defaultCode;
handle['../codes/home.js'] = requestHandlers.homeCode;
handle['../codes/initial.js'] = requestHandlers.initialCode;

//css
handle['../styles/default.css'] = requestHandlers.defaultStyle;
handle['../styles/home.css'] = requestHandlers.homeStyle;
handle['../styles/initial.css'] = requestHandlers.initialStyle;

//html
handle['../pages/home.html'] = requestHandlers.homePage;
handle['../pages/initial.html'] = requestHandlers.initialPage;

server.start (router.route, handle);
