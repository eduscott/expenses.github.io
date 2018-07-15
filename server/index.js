var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}

//welcomePage
handle['/'] = requestHandlers.welcomePage;

//loginPage
handle['/pages/login.html'] = requestHandlers.loginPage;
handle['/styles/login.css'] = requestHandlers.loginStyle;
handle['/codes/login.js'] = requestHandlers.loginCode;

//registerPage
handle['/pages/register.html'] = requestHandlers.registerPage;
handle['/styles/register.css'] = requestHandlers.registerStyle;
handle['/codes/register.js'] = requestHandlers.registerCode;

//homePage
handle['/pages/home.html'] = requestHandlers.homePage;
handle['/styles//home.css'] = requestHandlers.homeStyle;
handle['/codes/home.js'] = requestHandlers.homeCode;

server.start (router.route, handle);